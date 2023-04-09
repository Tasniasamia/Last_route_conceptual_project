import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb, getShoppingCart } from '../../../Localstorage_function/fakedb';
import { diamond } from '../../App';
import ShopData from '../ShopData/ShopData';

const Shop = () => {
  
    const datas=useLoaderData();
    
    const [data1,setData1]=useState(datas);
    console.log(data1);
    const [cart,setCart]=useState([])
   
    const getprops=useContext(diamond);
    const [data,setData]=getprops;

    useEffect(()=>{
        setData(cart.length);

    },[cart])
    function handler(products){
addToDb(products.id);
setCart([...cart,products]);

    }
    useEffect(()=>{
        let newarray=[];
        let filterdata;
        let shopcart=getShoppingCart();
        for(let id in shopcart){
            filterdata=datas.find(index=>index.id==id);
            if(filterdata){
                newarray.push(filterdata);
            }
        }
        setCart(newarray);
    },[datas])
    return (
        <div className='my-container grid md:grid-cols-3 grid-cols-1 gap-6'>
            {
                data1.map(index=><ShopData key={index.id} data={index} handler={handler}></ShopData>)
            }
        </div>
    );
};

export default Shop;