import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "../utils/apiFetch";
import { formatEvolutionChain } from "../utils/formatEvolutionChain";

const useEvolution = (id) => {
    const { data } = useQuery({
        queryKey: ['chain', id],
        queryFn: async () => {
            try {
                const { evolution_chain } = await apiFetch(`/pokemon-species/${ id }/`);
    
                const res = await fetch(evolution_chain.url);
                const { chain } = await res.json();
    
                return formatEvolutionChain(chain);
            } catch (error) {
                if(error.status === 404) {
                    return [];
                }

                throw error;
            }
        },
    });

    return data;
};

export default useEvolution;
