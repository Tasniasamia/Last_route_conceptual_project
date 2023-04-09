import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../../Localstorage_function/fakedb';
import { diamond } from '../../App';
import CartItem from '../CartItem/CartItem';

const Cart = () => {
    
    const cart=useLoaderData();
    console.log(cart);
    
    const [cartdata,setCartdata]=useState(cart);
    const catchprops=useContext(diamond);
    const [data,setData]=catchprops;
    
    useEffect(()=>{
        setData(cartdata.length);

    },[cartdata])
    function remove(id){
        removeFromDb(id);
        let removeitem=cartdata.filter(index=>index.id!==id);
        setCartdata(removeitem);
    }
    function clearCart(){
        deleteShoppingCart();
        setCartdata([]);
    }
    function clearCart2(){
        deleteShoppingCart();
        setCartdata([]);
    }
    let totalprice=0
    for(let i of cartdata){
        totalprice=totalprice+(i.quantity*i.price);

    }

    return (
        <div style={{height:"700px"}}>
            {
            cartdata.map(index=><CartItem index={index} key={index.id} totalprice={totalprice} remove={remove}></CartItem>)
            }
<div className='grid grid-cols-1 gap-5 justify-items-center  '>
    <div style={{width:"30%"}} className=" p-5 my-5">
    <div>
                {cartdata.length==0 && <p className='text-2xl font-bold'>Cart is Empty</p>}</div>
         
            <div className=' flex text-right flex-col'>
              
              <p>Total Amout:{totalprice}$</p>  
              <div>
                {cartdata.length==0 && <p>No items here to review</p>}</div>
            </div>
            <div className='flex justify-center'>
{cartdata.length==0?<Link to="/shop"><button className="btn btn-primary">Back to Shop </button></Link>:<button onClick={clearCart} className="btn btn-primary">Clear Cart </button>}
<button  onClick={clearCart2}  className="btn btn-primary">Place Order </button></div>
</div>
</div>
        </div>
    );
};

export default Cart;