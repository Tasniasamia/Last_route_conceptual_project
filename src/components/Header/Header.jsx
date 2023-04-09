import { useContext } from 'react';
import { Link,  } from 'react-router-dom';
import { getShoppingCart } from '../../../Localstorage_function/fakedb';
import { diamond } from '../../App';
import './Header.css'
const Header = () => {
  const [datalength]=useContext(diamond);
  
  console.log(datalength);
  return (
    
    <div className='navbar flex justify-center items-center p-3 bg-gray-300'>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
    <div> <Link to="/cart"><i className="fa-solid fa-cart-shopping text-emerald-500"></i>{datalength}</Link></div> 
      <Link to="/about">About</Link>
    </div>
 
  );
};

export default Header;