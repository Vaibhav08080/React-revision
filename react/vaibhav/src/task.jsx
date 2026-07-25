import { useEffect, useState } from "react"




export function Showcounter(){
const [count , setcount]=useState(0)
function addcount(){
    setcount(count+1)
    
}
function subcount(){
    setcount(count-1)
}
function resetcount(){
    setcount(0)
}
useEffect(()=>{
    console.log(count)
},[count])
   return <div>
    {count}
    <button onClick={addcount}>+</button>
    <button onClick={subcount}>-</button>
    <button onClick={resetcount}>reset</button>
    </div>
}