//import React from 'react'
import { useState } from 'react'

export default function NewTodoForm({ addTodos }){
    const [newItem, setNewItem] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        if (newItem === "" ) return;
    
        //setTodos((current) => {
          //return [...current, { title: newItem, completed: false}];
        //}); //回调函数  //另一种写法
        //console.log(todos);
    
        //setTodos((current) => [...current, { id: crypto.randomUUID(), title: newItem, completed: false}]);
       
        addTodos(newItem);

        setNewItem("");
      }
      
    return (
    <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
            <label htmlFor="item">New Item </label>
            <input type="text" id="tiem" value={newItem} onChange={(e) => setNewItem(e.target.value)}/>
            <button className="btn">Add</button>
        </div>
        
        

  </form>
  );
}