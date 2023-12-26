import React from 'react';
import {createBrowserRouter,RouterProvider, Route, Link} from 'react-router-dom'
import './App.css';
import Combine from './Combine.jsx';
function App() 
{
  const router = createBrowserRouter([
    {

      path:"/",
      element: <Combine />
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App
