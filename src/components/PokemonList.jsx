
import React, { useState }  from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import usePokemons from '../hooks/usePokemons';
import PokemonCard from './PokemonCard';

const PokemonList = () => {
    const pokemons = usePokemons();
    
    return (
            <div className='pokemons-list'>
            { pokemons.map((pokemon) => 
              <PokemonCard 
                key={ pokemon.id } 
                pokemon={ pokemon } 
                />) 
            }
            </div>
    );
};

export default PokemonList;