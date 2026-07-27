import { useEffect, useState } from "react";

function App() {
  const [todolist, settodolist] = useState([]);
  const [loading, setloading] = useState(false);
  async function fetchalltodo() {
    try {
      setloading(true);
      const response = await fetch("https://dummyjson.com/todos");
      const data = await response.json();
      settodolist(data.todos);
    } catch (e) {
      console.log(e);
    } finally {
      setloading(false);
    }
  }
  useEffect(() => {
    fetchalltodo();
  }, []);
  if (loading) {
    return <h1>Loading </h1>;
  }
  return (
    <div>
      <ul>
        {todolist.map((todo) => {
          return <li key={todo.id}>{todo.todo}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
