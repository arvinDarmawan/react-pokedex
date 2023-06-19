import React from 'react';
import { usePokemonModal } from '../../../context/PokemonModalProvider';
import DataRow from '../DataRow';
import { formatStats } from '../../../utils/formatStats';

const Stats = () => {
    const { currentPokemon } = usePokemonModal();
    const stats = formatStats(currentPokemon.stats);
    
    return (
        <>
            <table>
                <tbody>
                    {
                        stats.map(stat => {
                            const { name, value, max } = stat;
                            return <DataRow key={ name } category={ name } value={ value } max={ max } />
                        })
                    }
                </tbody>
            </table>
        </>
    );
};

export default Stats;