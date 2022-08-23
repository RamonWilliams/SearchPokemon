import { createContext, useState } from "react";


export const PokemonContext = createContext();

export  const  PokemonContextProvider = ({children}) =>{
      const [pokemon,setPokemon] = useState({});


      return (

       <PokemonContext.Provider value={{pokemon,setPokemon}} >
           {children}
       </PokemonContext.Provider>

      )
}
