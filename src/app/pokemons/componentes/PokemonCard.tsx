import Link from "next/link";
import Image from "next/image";

import { IoHeartOutline } from "react-icons/io5";
import { SimplePokemon } from "..";

interface Props {
  pokemon: SimplePokemon
}

const POKEMONS_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/'

export function PokemonCard({ pokemon }: Props) {
  const { id, name } = pokemon
  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="text-center p-6 bg-gray-800 border-b">

          <Image key={pokemon.id} src={`${POKEMONS_API}${pokemon.id}.svg`} className="h-24 w-24 text-white rounded-full mx-auto" alt={pokemon.name} width={100} height={100} />

          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{name}</p>
          <div className="mt-5">
            <Link
              href={`dashboard/pokemon/${id}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              Más información
            </Link>
          </div>
        </div>
        <div className="border-b">
          <Link href="/account/campaigns" className="px-4 py-2 hover:bg-gray-100 flex">
            <div className="text-red-600 flex items-center">
              <IoHeartOutline />
            </div>
            <div className="p-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                Agregar a favoritos
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
