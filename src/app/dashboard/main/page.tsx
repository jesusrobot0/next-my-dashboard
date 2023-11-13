import { WidgetsGrid } from "@/components";

export default function MainPage() {
  return (
    <div className="text-black p-2">
      <h1 className="my-2 text-3xl">Dashboard</h1>
      <span className="block mb-8 text-xl">Información general</span>
      <WidgetsGrid />
    </div>
  );
}
