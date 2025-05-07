import './App.css'
import React, { useState } from 'react'

const App = () => {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const addTodo = () => {
    if (!input.trim()) return

    setTodos([...todos, input.trim()])
    setInput('')
  }

  return (
    <div>
      <h1>Todo App</h1>
      <input
        type='text'
        placeholder='Add new todo'
        value={ input }
        onChange={(event) => setInput(event.target.value)}/>
      <button onClick={ addTodo }>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={ index }>{ todo }</li>
        ))}
      </ul>
    </div>
  )
}

export default App
