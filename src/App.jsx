import './App.css';
import React, { Suspense, useState } from 'react';
import PokemonList from './components/PokemonList';
import Modal from './components/modal/Modal';
import { PokemonModalProvider } from './context/PokemonModalProvider'; 
import Loader from './components/Loader';


function App() {
    return (
    <Suspense fallback={ <Loader /> }>
    <PokemonModalProvider>
        <div className='wrapper'>
        <h1 className='pokedex'>Pokédex</h1>
          <PokemonList />
        </div>
        <Modal />
    </PokemonModalProvider>
  </Suspense>
    )
}

export default App