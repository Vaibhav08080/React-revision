import { useState } from "react";

export function UsingCacheData() {
  const [response, setresponse] = useState(null);

  async function fetchdetails() {
    const localdata = localStorage.getItem("userdata");

    if (localdata) {
      console.log("Using local data");
      setresponse(JSON.parse(localdata));
      return;
    }

    try {
      console.log("Fetching data from API");

      const res = await fetch("https://dummyjson.com/test");
      const data = await res.json();

      setresponse(data);

      localStorage.setItem("userdata", JSON.stringify(data));
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div>
      <button onClick={fetchdetails}>Fetch Details</button>

      <pre>{JSON.stringify(response, null, 2)}</pre>
    </div>
  );
}