import { useState } from "react";

export function UserDetails() {
    const [response , setresponse]=useState("")
  function fetchdetails() {
    fetch("https://dummyjson.com/test")
      .then((res) => res.json())
      .then((data)=>{
        setresponse(JSON.stringify(data))
      })
      .catch((e) => {
        console.error(e);
      });
  }

  return (
    <div>
        {response}
      <button onClick={fetchdetails}>Fetch data</button>
    </div>
  );
}
