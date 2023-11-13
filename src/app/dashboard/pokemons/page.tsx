import { Metadata } from "next";
import { getPokemons } from "@/pokemons/services";
import { PokemonGrid } from "@/pokemons/components";

export const metadata: Metadata = {
  title: "Primeros 151 Pokémons",
  description: "Página de listado de los primeros 151 pokemons originales",
};

export default async function PokemonsListPage() {
  const pokemons = await getPokemons();

  return (
    <div className="flex flex-col">
      <span className="text-5xl pb-10">
        Listado de pokémons <strong>estático</strong>
      </span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
