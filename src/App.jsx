import { useEffect, useState } from 'react'
import './App.css'
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';

export default function App() {
  
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEM");

    if(!localValue) return [];
    return JSON.parse(localValue);
  });

  //const handleSubmit = () => {

  //}
  useEffect(() => {
  localStorage.setItem("ITEM", JSON.stringify(todos));
 }, [todos]);


  function addTodos(title){
    setTodos((current) => [...current, { id: crypto.randomUUID(), title, completed: false}]);
  }

  function toggleTodo(id, completed) {
    setTodos(current => {
      return current.map(todo => {
        if (todo.id ===id) return {...todo, completed: completed};

        return todo;
      })
    });
  }

  function deleteTodo(id){
    //简写 setToods((currrent) => current.filter((todo) => todo.id !== id));
    setTodos(current => {
       return current.filter(todo => todo.id !== id);

       //{return todo.id !== id};
    });
  }

  return (
    <>
     < NewTodoForm addTodos={addTodos} />


      <h1 className="header">To do list</h1>

      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
);
}