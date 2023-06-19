import React from 'react';
import { usePokemonModal } from '../../../context/PokemonModalProvider';
import DataRow from '../DataRow';
import { toRegularCase } from '../../../utils/toRegularCase';

const Move = () => {
    const { currentPokemon } = usePokemonModal();
    const moves =  currentPokemon.moves.map(data => toRegularCase(data.move.name));
    return (
        <>
           <table>
              <tbody>
              {
                moves.map((move, index) => {
                    return <DataRow key={ move } category={ index + 1 } value={ move } />
                })
              }
              </tbody>
           </table>
        </>
    );
}

export default Move;