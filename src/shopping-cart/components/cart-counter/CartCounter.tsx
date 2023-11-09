/**
 * Para poder usar hooks y JS que se ejecute en el cliente, hay que
 * convertir el componente a client component con 'use client'.
 */

'use client'

import { useState } from "react";

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
      <span className="text-9xl">{counter}</span>
      <div className="flex">
        <button onClick={handleAdd} className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">+1</button>
        <button onClick={handleReset} className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">Reset</button>
        <button onClick={handleSubtract} className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">-1</button>
      </div>
    </>
  )
}
