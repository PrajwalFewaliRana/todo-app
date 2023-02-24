
function App() {

  return (
     <>
     <div className="h-screen bg-gradient-to-b from-cyan-500 to-blue-700 flex items-center justify-center">
       <div className="box bg-white w-[33%] p-10 rounded-md shadow-md">
          <h3 className="font-bold text-3xl ">My To Do App</h3>
          <form action="" className="bg-cyan-100 p-2 rounded-md flex justify-between my-5">
            <input type="text" className="flex-1 py-2 px-3 focus:outline-0" autoFocus placeholder="Enter Here..."/>
            <button type="submit" className="bg-cyan-500 text-white px-3">Submit</button>
          </form>
          <ul className="border-b-2 border-grey-700 mb-5 pb-5">
            <li className="flex justify-between mb-1 hover:bg-cyan-50 cursor-pointer group">
              <div className="text">Go To Market</div>
              <div className="bg-cyan-700 text-sm text-white px-3 rounded-sm opacity-0 group-hover:opacity-100">Delete</div>
            </li>
            <li className="flex justify-between mb-1 hover:bg-cyan-50 cursor-pointer group">
              <div className="text">Buy a Mouse</div>
              <div className="bg-cyan-700 text-sm text-white px-3 rounded-sm opacity-0 group-hover:opacity-100">Delete</div>
            </li>
            <li className="flex justify-between mb-1 hover:bg-cyan-50 cursor-pointer group">
              <div className="text">Buy Keyboard</div>
              <div className="bg-cyan-700 text-sm text-white px-3 rounded-sm opacity-0 group-hover:opacity-100">Delete</div>
            </li>
            <li className="flex justify-between mb-1 hover:bg-cyan-50 cursor-pointer group">
              <div className="text">Buy Vegetables</div>
              <div className="bg-cyan-700 text-sm text-white px-3 rounded-sm opacity-0 group-hover:opacity-100">Delete</div>
            </li>
            <li className="flex justify-between mb-1 hover:bg-cyan-50 cursor-pointer group">
              <div className="text">Cook</div>
              <div className="bg-cyan-700 text-sm text-white px-3 rounded-sm opacity-0 group-hover:opacity-100">Delete</div>
            </li>
          </ul>
          <div className="foot flex justify-between mt-5 cursor-pointer">
            <div>5 Items</div>
            <div className="bg-cyan-700 text-sm text-white px-3 rounded-sm">Clear All</div>
          </div>
       </div>

     </div>
     </>
  )
}

export default App
