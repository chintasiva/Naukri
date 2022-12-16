import {createContext, useState} from "react"

export const StateContext=createContext();

export default function StateContextProvider({children}){
    const [country,setCountry]=useState("")
    const [location ,setLocation]=useState("")
const [field,setField]=useState("")

    return (<StateContext.Provider value={{country,setCountry,location,setLocation,field,setField}}>{children}</StateContext.Provider>)
}