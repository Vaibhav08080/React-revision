import { useEffect, useState } from "react";
import useDebounce from "./hooks/useDebounce";

function App() {
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    if (debouncedSearch) {
      console.log("API Call:", debouncedSearch);
    }
  }, [debouncedSearch]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h3>Typing: {search}</h3>

      <h3>Debounced: {debouncedSearch}</h3>
    </div>
  );
}

export default App;