// export function Functionalcomponent(){
//     return <div>
//         <h1>
//             heloo gulu gulu I mich U
//         </h1>
//     </div>

import { useState } from "react";

// }
const flag = true;

function meowladleghopghop(flag) {
  return flag ? <h1>meow ladle ghop</h1> : <h2> gulu gulu</h2>;
}

export const Functionalcomponent = () => {
  return <div>{meowladleghopghop(flag)}</div>;
};



export const FunctionHandleClick = () => {
  const [count, setCount] = useState(0);
  flag=false
  function showtext(){
    if (flag){
        flag=false
    }
    else{
        flag=true
    }

    if(flag){
       return <p>Hi broski</p>
    }
  }
  function FunctionForButton() {
    if(count>30){
        setCount(0)
    }
    else{
        setCount(count+1)
    }
    
    
  }
  return (
    <div>
      <p>{count}</p>
      <button onClick={FunctionForButton}>Click</button>
      <button onclick={showtext}>Show Text</button>
    </div>
  );
};
