import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "../utils/apiFetch";
import { formatPokemonData } from "../utils/formatPokemonData";

const usePokemons = () => {
    const { data } = useQuery({
        queryKey: ['pokemons'],
        queryFn: async () => {
            const { results: pokemonList } = await apiFetch(`/pokemon`);
            const pokemons = await Promise.all(
                pokemonList.map(async ({url}) => {
                    const res = await fetch(url);
                    const data = await res.json();
                    return formatPokemonData(data);
                })
            );

            return pokemons;
        }
    });

    return data;
};

export default usePokemons;