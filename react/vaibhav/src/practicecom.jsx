import { useState } from "react"





export const ShowtextwithButton=()=>{
    const [state , updatestate]=useState(false)
    function modifystate(){
        updatestate(!state)
    }
    return(
        <div>
        <button onClick={modifystate}> click me 
        </button>
        {state ? <h1>Hello Gulu Gulu</h1>:<h4> hat tmkc</h4>}
        </div>
    )
}