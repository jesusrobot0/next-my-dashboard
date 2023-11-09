import { redirect } from "next/navigation";

export default function HomePage() {
  /**
   * Al entrar en la ruta "/" redirige a la ruta especificada
   */

  redirect("/dashboard/main");
  return <h1>Hola Mundo</h1>;
}
