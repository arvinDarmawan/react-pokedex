import React from 'react';
import { usePokemonModal } from '../../context/PokemonModalProvider';

const IntroModal = () => {
    const { currentPokemon } = usePokemonModal();

    return (
        <div className='pokemon-intro'>
            <div className='current-pokemon'>
            <img src={ currentPokemon.imgSrc } alt='Pokemon-Image' />
                <div>
                    <span className='id-number'>#{ currentPokemon.paddedId }</span>
                    <span className='pokemon-name'>{ currentPokemon.name }</span>

                    <div className='types'>
                        {
                            currentPokemon.types.map(({ name }) => {
                                return (
                                    <div key={ name } className={ name }>
                                        <span className='type-name'>{ name }</span>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default IntroModal;
