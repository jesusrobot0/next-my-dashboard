import { getPokemons } from "@/pokemons/services";
import { PokemonGrid } from "@/pokemons/components";

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
