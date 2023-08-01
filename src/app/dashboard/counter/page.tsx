import { CartCounter } from "@/app/shopping-cart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Shopping Cart',
  description: 'Página de carrito de compra'
}

export default function CounterPage() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <span>Carrito de compras</span>
      <CartCounter initialValue={10} />
    </div>
  );
}