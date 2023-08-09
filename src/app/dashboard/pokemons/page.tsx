import { PokemonsGrid, PokemonsResponse, SimplePokemon } from "@/app/pokemons"

const getPokemons = async (limit = 1281, offset = 0): Promise<SimplePokemon[]> => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
  const data: PokemonsResponse = await response.json()

  const pokemons = data.results.map(({ url, name }) => ({
    id: url.split('/').at(-2)!,
    name
  }))

  return pokemons
}

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151)

  return (
    <div className="flex flex-col">
      <span className="text-5xl pb-10">Listado de pokémons <strong>estático</strong></span>
      <PokemonsGrid pokemons={pokemons} />
    </div>
  )
}
