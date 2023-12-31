# Estrategias de renderizado

## Server Side + Client Side Rendering

En Next, por defecto, todos los componentes son Server Components, los cuales no permiten ejecutar código en el lado del cliente. Si puedes ejecutar JS pero en el servidor, y lo que se va a terminar enviando al cliente es el resultado de dicha ejecución.

Pero hooks como useState, useEffect, useContext, etc; no funcionan de primera, pero con la directiva `'use client'` esto se puede modificar.

Aunque no poder hacer esto de primeras no es un problema, los Server Components tienen muchas ventajas, como la de minimizar el código que se envía al cliente dando como resultado tiempos de carga mucho más cortos.

### Temas puntuales de la sección

- Tailwind classes
- Estructura de un dashboard
- useState
- use-client
- Next Link
- Next Image
- Estructura de proyecto
- Permitir imágenes externas
- Entre otras cosas

### Redirecciones

Las redirecciones se hacen con la función de Next `redirect()` y funciona tanto en componentes de servidor como en los que se ejecutan en el cliente. Recibe dos parámetros el primero para especificar la ruta a donde se va a redirigir y el otro para el tipo de redirección, por defecto es push.

```tsx
import { redirect } from 'next/navigation'

export default function HomePage() {
  redirect('/dashboard')
  return <h1>Hola Mundo</h1>
}
```

### Next/Image

Es un componente propio de Next que añade características de optimización automática a la etiqueta `<img/>`.

- Recorta la imagen al tamaño adecuado para cada dispositivo
- Convierte el formato de la imagen a formatos modernos como **AVIF** Y **WebP**
- Carga las imágenes solo cuando aparecen en el viewport para una experiencia de carga más rápida (**lazy loading**).
- Previene el **layout shifting** cuando las imágenes estén cargando.

```tsx
import Image from 'next/image'

;<Image
  src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
  alt="User avatar"
  width={50}
  height={50}
/>
```

Estos cuatro atributos son obligatorios, existen otros como `priority` que al establecerlo en `true` da maxima prioridad a la imagen y hace el fetch del recurso desde el inicio, este atributo se recomienda usarlo solo en las imágenes más importantes del sitio y que se encuentran en el viewport en cuanto se renderiza la página.

Para cargar imágenes de orígenes externos hay que agregar la siguiente configuración en el archivo `next.config.js`:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

module.exports = nextConfig
```

### Manejo de estado del lado del cliente (hooks)

Para poder utilizar `useState()` o cualquier otro **hook** de React es necesario convertir el componente en un **Client Component** con `'use client'` esto permite decirle a Next que debe de renderizar el componente en el lado del cliente.

```tsx
'use client'

import { useState } from 'react'

interface Props {
  initialValue: number
}

export function CartCounter({ initialValue = 0 }: Props) {
  const [counter, setCounter] = useState(initialValue)

  const handleAdd = () => setCounter(counter + 1)
  const handleReset = () => setCounter(initialValue)
  const handleSubtract = () => setCounter(counter - 1)

  return (
    <>
      <span>{counter}</span>
      <div>
        <button onClick={handleAdd}>+1</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleSubtract}>-1</button>
      </div>
    </>
  )
}
```

Este componente recibe la **prop** `initialValue` desde un **Server Component**, esta es una característica muy poderosa de Next ya que permite enviar el componente `CartCounter` con información del del servidor desde el principio sin necesidad de hacer fetch en el cliente.

> 💡 Cuando estés diseñando tu aplicación, visualízala como un árbol de componentes generados desde el servidor. Solo algunas partes específicas, como hojas en el árbol, deben ser creadas por el cliente. Esta estructura te permitirá maximizar el rendimiento y la eficiencia de tu app, asegurando que solo se transfiera al cliente lo que realmente necesita.

----

## Generación dinámica - SSR

### Manejo de errores 500

Lor errores **500** son errores que suceden en el lado del servidor, por lo que el único responsable de manejarlos es este. Next ofrece una forma muy fácil de manejar este tipo de errores mediante la creación del archivo `error.js`

```tsx
'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}
```
