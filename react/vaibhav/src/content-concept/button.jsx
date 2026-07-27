import { useContext } from "react"
import { GlobalContext } from "../globalstate"



export default function ComponentButton(){
    const {theme , settheme}= useContext(GlobalContext)
    function changetheme(){
        if (theme==="light"){
            settheme("dark")
        }
        else{
            settheme("light")
        }
    }
    return <button onClick={changetheme}>Change theme</button>
}