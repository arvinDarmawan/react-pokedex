export const formatPokemonData = (pokemon) => {
    const { id, name, sprites, weight, height, types } = pokemon;
    console.log("pokemon raw", pokemon)
    const weightInKg = (weight / 10 );
    const weightInPounds = (weight / 10 ) * 2.20462;
    const heightInMeter = (height / 10 ) + ' cm';
    const paddedId = String(id).padStart(3, '0');
    const formattedTypes = types.map(({ type }) => type);
    const pokemonImg = sprites.other.dream_world.front_default || sprites.other['official-artwork'].front_default;

    return {
        ...pokemon,
        paddedId,
        weight: `${weightInPounds.toFixed(2)} lbs (${weightInKg.toFixed(2)} kg)`,
        imgSrc: pokemonImg,
        height: heightInMeter,
        types: formattedTypes,
        name: name.replace(/-/g, ' '),
    };
}