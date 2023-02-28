import React,{useState, useRef,useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';


const ToDoAppComponents = () => {
  
    const todoNameRef = useRef();
    const [text,setText] = useState('');
    const [todos,setTodos] = useState([])

    
    useEffect(()=>{
     let storedData= localStorage.getItem('tododata')
     let newData = JSON.parse(storedData)
     setTodos(newData)
    },[])
    

    useEffect(() => {
      localStorage.setItem('tododata',JSON.stringify(todos))
    }, [todos])

    const deleteTodo = (id)=>{
      const updatedTodo = todos.filter((yo)=>yo.id !== id)
      setTodos(updatedTodo)
    }
    const clearTodos = ()=>{
      setTodos([])
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault();


        if(todoNameRef.current.value==''){
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
    <input ref={todoNameRef} type="text"  onChange = {(e)=> setText(e.target.value)} className="flex-1 py-2 px-3 focus:outline-0" autoFocus placeholder="Enter Here..."/>
    <button type="submit" className="bg-cyan-500 text-white px-3">Submit</button>
    </form> 

    <ul className="border-b-2 border-grey-700 mb-5 pb-5">
        {todos.map((item)=>(
            <li key={item.id} className="flex justify-between mb-1 hover:bg-cyan-50 cursor-pointer group">
            <div className="text">{item.text}</div>
            <div onClick={()=>deleteTodo(item.id)} className="bg-cyan-700 text-sm text-white px-3 rounded-sm opacity-0 group-hover:opacity-100">Delete</div>
          </li>
        ))}
    

  </ul>
    <div className="foot flex justify-between mt-5 cursor-pointer">
      <div>{todos.length} Items</div>
      <div onClick={clearTodos} className="bg-cyan-700 text-sm text-white px-3 rounded-sm">Clear All</div>
    </div>
 </div>
  )
}

export default ToDoAppComponents