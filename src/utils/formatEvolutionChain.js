
export function formatEvolutionChain(evolutionChain) {
    const { species, evolves_to } = evolutionChain;
    
    if(! evolves_to.length) {
        return [];
    }
    
    const evolutions = evolves_to.reduce((chain, evolution) => {
        return [
            ...chain,
            {
                current: {
                    name: species.name,
                    image: getPokemonImage(species.url),
                },
                next: {
                    name: evolution.species.name,
                    image: getPokemonImage(evolution.species.url),
                },
            },
            ...formatEvolutionChain(evolution)
        ];
    }, []);

    return evolutions;
}

const getPokemonImage = (url) => {
    const id = url.match(/\/(\d+)\//)[1];
    const isPokemonHasSvg = id < 650; 

    const base = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other`;
    
    if(isPokemonHasSvg) {
        return `${ base }/dream-world/${ id }.svg`;
    }
    
    return `${ base }/official-artwork/${ id }.png`;
};
