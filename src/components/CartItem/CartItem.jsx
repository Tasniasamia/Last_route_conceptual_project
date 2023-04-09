import React from 'react';

const CartItem = (props) => {
    let propsdata=props.index;
    console.log(propsdata);
   
    
    return (
     
   
       <div className='grid grid-cols-1 gap-8 justify-items-center mt-8'>
            <div className="card card-side bg-base-100 shadow-xl w-1/2 my-5"style={{height:"200px"}}>
  <figure><img src={propsdata.picture} style={{height:"100%",width:"300px"}} alt="gadjets"/></figure>
  <div className='card-body' >
    <div className='flex justify-between items-center'>
        <div>
            <p>{propsdata.name}</p>
            <p>Quantity: {propsdata.quantity}</p>
        </div>
        <div>
            <p>{propsdata.price}$</p>
            <p>Total:{props.totalprice}$</p>
        </div>
    </div>
    <div onClick={()=>props.remove(propsdata.id)} className="card-actions justify-start">
      <button className="btn btn-primary">Remove </button>
    </div>
  </div>
</div>

</div>




    );
};

export default CartItem;