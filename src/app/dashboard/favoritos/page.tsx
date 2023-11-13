import { Metadata } from "next";
import { PokemonGrid } from "@/pokemons/components";

export const metadata: Metadata = {
  title: "Favoritos",
  description: "Mis pokémons favoritos",
};

export default async function FavoritesPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl pb-10">
        Pokémons <strong className="text-rose-600">Favoritos</strong>
      </span>
      <PokemonGrid pokemons={[]} />
    </div>
  );
}
