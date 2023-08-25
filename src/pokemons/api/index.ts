import { notFound } from "next/navigation";
import { Pokemon, PokemonsResponse, SimplePokemon } from "@/pokemons";

export const getPokemons = async (
  limit = 151,
  offset = 0
): Promise<SimplePokemon[]> => {
  const URL = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
  const response = await fetch(URL);
  const data: PokemonsResponse = await response.json();

  const pokemons = data.results.map(({ url, name }) => ({
    id: url.split("/").at(-2)!,
    name,
  }));

  // throw new Error('ERROR!!! OH GOD!!! SERVER ON 🔥')

  return pokemons;
};

export async function getPokemonById(id: string): Promise<Pokemon> {
  try {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await fetch(URL, {
      next: { revalidate: 60 * 60 * 24 * 30 * 6 },
    });
    const data = await response.json();

    return data;
  } catch (error) {
    notFound();
  }
}

export async function getPokemonByName(name: string): Promise<Pokemon> {
  try {
    const URL = `https://pokeapi.co/api/v2/pokemon/${name}`;
    const response = await fetch(URL, {
      next: { revalidate: 60 * 60 * 24 * 30 * 6 },
    });
    const data = await response.json();

    return data;
  } catch (error) {
    notFound();
  }
}
