import { createContext, useContext, useState } from "react";

export const ContextFruits = createContext();

export function ContextProviderFruits({children}) {
    const [listFruits,setListFruits] = useState([]);
    return (
        <ContextFruits.Provider value={{listFruits,setListFruits}}>
            {children}
        </ContextFruits.Provider>
    )
}

export function useContextFruits(){
    return useContext(ContextFruits);
}