import { useState } from "react";

export const HooksPractice = () => {
  const [value, setvalue] = useState(0);
  function  addvalue() {
    setvalue(value + 1);
  }
  function minusvalue(){
    setvalue(value-1);
  }
    return(
        <div>
    <button onClick={addvalue}>plus button</button>
    <button onClick={minusvalue}>minus button</button>

    <h1>{value}</h1>
    </div>)
};
