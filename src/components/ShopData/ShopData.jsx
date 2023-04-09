import React from 'react';

const ShopData = (props) => {
    const propsdata=props.data;
    return (
        <div>
         <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={propsdata.picture} alt="gadgets" /></figure>
  <div className="card-body">
    <h2 className="card-title">
    {propsdata.name}
    </h2>
    <p>Catagory: {propsdata.category}</p>
    <div className="w-full text-center">
        <button className='btn-primary'onClick={()=>props.handler(propsdata)}>Add to Cart</button>
     
    </div>
  </div>
</div>   
        </div>
    );
};

export default ShopData;