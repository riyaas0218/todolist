import React, { useState } from 'react'

const App = () => {
  const [todo,settodo]=useState('');
  const [todolist,settodolist]=useState([]);
  
  const addTodo=()=>{
    if(todo.trim()==='') return;
    settodolist([...todolist,{id:Date.now(),text:todo,completed : false}]);
    settodo(' ');
  }

  const togglecomple=(id)=>{
    settodolist(todolist.map((item)=> item.id=== id ?{...item,completed : !item.completed}:item)
       )
  }
  const deletetod=(id)=>{
    settodolist(
      todolist.filter((item)=>item.id !== id)
    )
  }
  return (
    <div>
       <h1>To-Do List</h1>
       <div class="input-container">
        <input
           type='text' placeholder='Add a new Task' value={todo} onChange={(e)=>settodo(e.target.value)}/>
        <button onClick={addTodo} className='addbutton'>Add</button>
       </div>
       <ul className='todo-list'>
          {todolist.map((item)=>(
            <li key={item.id} onClick={()=>togglecomple(item.id)}
            
            style={{
              cursor : 'pointer',
              textDecoration:item.completed ?'line-through':'none',
              color :item.completed ? 'gray' : 'black'
  
            }}
            >
              <span>{item.text}</span>
              <button className='Delete-btn' 
                onClick={(e)=>{e.stopPropagation();
                deletetod(item.id);
              }} >Delete</button>
              </li>
          ))}
       </ul>
    </div>
  )
}

export default App
