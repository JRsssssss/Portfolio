import React from 'react';
import './App.css';
import earth from "../src/assets/earth.jpg";
function App() 
{
  return (
    <>
      <div className="bg-black flex justify-center items-center h-[500px]">
        <h1 className="text-4xl font-bold underline text-red-500 rotate-animation">
          <img src={earth} alt="wow" className="w-[200px] h-[200px]"/>
        </h1>
      </div>
     
    </>
  )
}

export default App
