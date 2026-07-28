import { Routes, Route } from "react-router-dom";
import Recipe from "./components/recipe";
import Cart from "./components/cart";

function App() {
  return (
    <Routes>
      <Route path="/recipe" element={<Recipe />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;