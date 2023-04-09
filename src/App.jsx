import React, { createContext, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header/Header';
export const diamond=createContext(0)

const App = () => {
  const [data,setData]=useState(0);
  
  return (
    <diamond.Provider value={[data,setData]}>
    <div>
      <Header></Header>
      <div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div></diamond.Provider>
  );
};

export default App;