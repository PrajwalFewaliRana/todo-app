import React from 'react'

const TodoListComponents = ({newtodo}) => {
  return (
    <ul className="border-b-2 border-grey-700 mb-5 pb-5">
        {newtodo.map((item)=>(
            <li key={item.id} className="flex justify-between mb-1 hover:bg-cyan-50 cursor-pointer group">
            <div className="text">{item.text}</div>
            <div className="bg-cyan-700 text-sm text-white px-3 rounded-sm opacity-0 group-hover:opacity-100">Delete</div>
          </li>
        ))}
    

  </ul>
  )
}

export default TodoListComponents