import { PokemonsGrid } from "@/pokemons"
import { getPokemons } from "@/pokemons/api"



export default async function PokemonsListPage() {
  const pokemons = await getPokemons()

  return (
    <div className="flex flex-col">
      <span className="text-5xl pb-10">Listado de pokémons <strong>estático</strong></span>
      <PokemonsGrid pokemons={pokemons} />
    </div>
  )
}
