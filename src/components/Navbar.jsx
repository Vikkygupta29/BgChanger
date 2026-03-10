import React, { useState } from 'react'

const Navbar = () => {
  const [color,setColor] = useState("black")

  return (
    <div style={{backgroundColor:color}} className='flex h-screen justify-center items-end'>
        <div className='bg-white w-fit flex my-14 rounded-2xl gap-8 py-2 px-6 font-semibold'>
            <button onClick={()=>setColor("red")} className='bg-red-600 text-white py-2 px-5 active:scale-95 cursor-pointer rounded-2xl'>Red</button>
            <button onClick={()=>setColor("green")} className='bg-green-500 text-white py-2 px-5 active:scale-95 cursor-pointer rounded-2xl'>Green</button>
            <button onClick={()=>setColor("blue")} className='bg-blue-500 text-white py-2 px-5 active:scale-95 cursor-pointer rounded-2xl'>Blue</button>
            <button onClick={()=>setColor("olive")} className='bg-olive-500 text-white py-2 px-5 active:scale-95 cursor-pointer rounded-2xl'>Olive</button>
            <button onClick={()=>setColor("gray")} className='bg-gray-500 text-white py-2 px-5 active:scale-95 cursor-pointer rounded-2xl'>Gray</button>
            <button onClick={()=>setColor("yellow")} className='bg-yellow-500 text-white py-2 px-5 active:scale-95 cursor-pointer rounded-2xl'>Yellow</button>
            <button onClick={()=>setColor("pink")} className='bg-pink-500 text-white py-2 px-5 active:scale-95 cursor-pointer rounded-2xl'>Pink</button>
            <button onClick={()=>setColor("purple")} className='bg-purple-500 text-white py-2 px-5 active:scale-95 cursor-pointer rounded-2xl'>Purple</button>
            <button onClick={()=>setColor("lime")} className='bg-lime-400  text-white py-2 px-5 active:scale-95 cursor-pointer rounded-2xl'>Lime</button>
            <button onClick={()=>setColor("white")} className='bg-gray-400 text-white py-2 px-5 active:scale-95 cursor-pointer rounded-2xl'>White</button>
            <button onClick={()=>setColor("black")} className='bg-black text-white py-2 px-5 active:scale-95 cursor-pointer rounded-2xl'>Black</button>
        </div>
    </div>
  )
}

export default Navbar