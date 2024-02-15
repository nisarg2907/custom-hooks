import { useEffect, useState } from "react";
import axios from "axios";

export const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos")
      .then((newTodosResponse) => {
        setTodos(newTodosResponse.data.todos);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        
        setLoading(false);
      });
  }, []);

  return { todos, loading };
};
