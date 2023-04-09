import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from './components/Home';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';
import About from './components/About';
import loaddata from '../buildprefunction';
import Header from './components/Header/Header';
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      loader:loaddata,
      
      children:[{
        path:"/",
        element:<Home></Home>,
      },{
        path:"/shop",
        element:<Shop></Shop>,
        loader:()=>fetch('products.json'),
      },

      {
        path:"/cart",
        element:<Cart></Cart>,
        loader:loaddata,
        
      },
      {
        path:"/about",
        element:<About></About>,
      }
    
    ]
    },
  ]);
ReactDOM.createRoot(document.getElementById('root')).render(    <RouterProvider router={router} />)
