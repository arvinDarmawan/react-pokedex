import React from 'react';
import { usePokemonModal } from '../context/PokemonModalProvider';

const PokemonCard = ({ pokemon, pokemon: { paddedId, name, types, imgSrc } }) => {
    const { openModal } = usePokemonModal();
    return (
        <div 
        className={ `pokemon-card ${ types[0].name }`}
        onClick={ () => openModal(pokemon) }
        >
            <div>
                <span className='pokemon-name'>{ name }</span>
                <div className='types'>
                    {
                        types.map(({ name }) => {
                            return (
                                <div key={ name } className={ name }>
                                    <span>{ name }</span>
                                </div>
                            );
                        })
                    }
                </div>
            </div>

            <div className='pokeball-bg'></div>
            <img className='pokemon-image' src={ imgSrc } alt='pokemon-image' />
        </div>
    );
};

export default PokemonCard;