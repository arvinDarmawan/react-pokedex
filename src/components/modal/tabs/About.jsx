import React from 'react';
import { usePokemonModal } from '../../../context/PokemonModalProvider';
import DataRow from '../DataRow';
import { toRegularCase } from '../../../utils/toRegularCase';

const About = () => {
    const { currentPokemon } = usePokemonModal();
    console.log(currentPokemon.abilities)
    const abilities =  currentPokemon.abilities.map(data => toRegularCase(data.ability.name));
    return (
        <>      
            <table>
                <tbody>
                    <DataRow category={ 'species' } value={ currentPokemon.species.name } />
                    <DataRow category={ 'height' } value={ currentPokemon.height } />
                    <DataRow category={ 'weight' } value={ currentPokemon.weight } />

                    <tr>
                        <td className='category'>Abilities</td>
                        <td> {abilities.join(', ')}</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default About;