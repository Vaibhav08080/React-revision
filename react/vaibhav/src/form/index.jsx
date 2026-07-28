import { useState } from "react";

function Formcomponent() {
  const [namevalue, setnamevalue] = useState("");

  const handleinputchange = (e) => {
    const value = e.target.value;
    setnamevalue(value);
  };

  return (
    <div>
      <h1>Form</h1>

      <input
        name="name"
        value={namevalue}
        id="name"
        placeholder="Enter your Name"
        onChange={handleinputchange}
      />

      <h2>{namevalue}</h2>
    </div>
  );
}

export default Formcomponent;