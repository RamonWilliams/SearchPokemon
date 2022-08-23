import React, { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
import axios from 'axios';

import PokeCard from './components/PokeCard';

const  App = () => {
  const [pokemon,setPokemon] = useState(null);
  const [keyword,setkeyword] = useState("");
  const getPokemon = async () =>{
    const raw = await axios.get(`https://pokeapi.co/api/v2/pokemon/${keyword}`)
    setPokemon(raw.data);
  }
  useEffect(()=>{
     
  },[keyword])


  return (
    <div className="App">     

      <h1>Buscador de Pokemon</h1>
      <input type="text" id='search' onChange={() => setkeyword(search.value)} />
      <button onClick={()=>getPokemon()}>Search</button>
      <button onClick={()=>setPokemon(null) && setkeyword("")}>Reseat</button>
     <PokeCard pokemon = {pokemon} />
      
    </div>
  )
}

export default App
