import { useEffect, useState } from "react";
import axios from "axios";

export const useTodosPoll = (intervalSeconds) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newTodosResponse = await axios.get("https://sum-server.100xdevs.com/todos");
        setTodos(newTodosResponse.data.todos);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData(); 

    const intervalId = setInterval(() => {
      fetchData(); 
    }, intervalSeconds * 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [intervalSeconds]);

  return { todos, loading };
};
