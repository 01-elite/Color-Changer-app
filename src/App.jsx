import {useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css' 

function App() {
 
  const[color, setColor]=useState('bg-black')

  return (
    <>
     <h1 className="text-4xl font-bold text-blue-600 ">
      Hello Tailwind v4 🚀 Project 4
    </h1>

    <div className={` h-1000 w-full pt-3 p-6 border mt-2 rounded-lg ${color}`}>
    
    <div className="w-full bg-white rounded-lg p-4 ">
      <button 
      onClick={()=>{setColor('bg-red-500')}}
 className=" px-10 py-2 border rounded-xl bg-red-500 text-white">Red</button>

<button 
      onClick={()=>{setColor('bg-green-500')}}
 className="px-10 py-2 border rounded-xl text-white bg-green-500">Green</button>

<button 
      onClick={()=>{setColor('bg-blue-500')}}
 className="px-10 py-2 border rounded-xl text-white bg-blue-500">blue</button>

<button 
      onClick={()=>{setColor('bg-yellow-500')}}
 className="px-10 py-2 border rounded-xl text-white bg-yellow-500">yellow</button>

<button 
      onClick={()=>{setColor('bg-pink-500')}}
 className="px-10 py-2 border rounded-xl text-white bg-pink-500">Pink</button>

</div>
</div>
    </>
  )
}

export default App
