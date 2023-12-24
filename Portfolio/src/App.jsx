import React from 'react';
import './App.css';
import earth from './assets/earth.jpg';
function App() 
{
  return (
    <>
      <div className="bg-black flex justify-center items-center h-[500px]">
        <h1 className="text-4xl font-bold underline text-red-500 rotate-animation">
          <img src="{earth}" alt="wow" />
        </h1>
      </div>
     
    </>
  )
}

export default App
