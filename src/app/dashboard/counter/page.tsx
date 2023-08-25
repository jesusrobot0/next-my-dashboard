import { CartCounter } from "@/shopping-cart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Shopping Cart',
  description: 'Página de carrito de compra'
}

export default function CounterPage() {
  /**
   * Este es un componente de servidor que renderiza un componente cliente.
   * El valor del prop "initialValue" que le enviamos desde aquí se lo enviamos desde el 
   * servidor!.
   */
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <span>Carrito de compras</span>
      <CartCounter initialValue={10} />
    </div>
  );
}