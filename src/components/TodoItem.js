import React from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../store/todoSlise'

function TodoItem({text,id}) {
    const dispaht=useDispatch()
  return (
    <div>
        <p>{text}</p>
        <button onClick={()=>dispaht(removeTodo({id}))}>delete</button>
    </div>
  )
}

export default TodoItem