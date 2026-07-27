import { createContext, useState } from "react";



export const GlobalContext=createContext(null)

function GlobalState({children}){
    const [theme , settheme] = useState('light')
    return <GlobalContext.Provider value={{theme , settheme}}>{children}</GlobalContext.Provider>
}


export default GlobalState