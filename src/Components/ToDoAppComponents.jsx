import React,{useState, useRef} from 'react'
import TodoListComponents from './TodoListComponents'
import { v4 as uuidv4 } from 'uuid';


const ToDoAppComponents = () => {
  const [count,setCount]= useState(0)
    const todoNameRef = useRef();
    const [text,setText] = useState('');
    const [todos,setTodos] = useState([])
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(text==''){
            return;
        }
        setTodos((oldtodos)=>{
            return [...oldtodos, {id:uuidv4() , text:text}]
            
            
    })
        todoNameRef.current.value = null;
        
    }
  return (
    <div className="box bg-white w-[33%] p-10 rounded-md shadow-md">
    <h3 className="font-bold text-3xl ">My To Do App</h3>

    <form onSubmit={handleSubmit} className="bg-cyan-100 p-2 rounded-md flex justify-between my-5">
    <input type="text"  onChange = {(e)=> setText(e.target.value)} className="flex-1 py-2 px-3 focus:outline-0" autoFocus placeholder="Enter Here..."/>
    <button type="submit" onClick={()=>setCount(count + 1)} className="bg-cyan-500 text-white px-3">Submit</button>
    </form> 

     <TodoListComponents newtodo={todos} />
    <div className="foot flex justify-between mt-5 cursor-pointer">
      <div>{`${count } Items`}</div>
      <div className="bg-cyan-700 text-sm text-white px-3 rounded-sm">Clear All</div>
    </div>
 </div>
  )
}

export default ToDoAppComponents