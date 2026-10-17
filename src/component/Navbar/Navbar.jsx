import React, {useState} from "react";
import { Link } from "react-router-dom";
import { IoIosCart } from "react-icons/io";
import "./Navbar.css"
import CartSideBar from "../CartSideBar/CartSideBar";

const Navbar = ({cart ,setCart}) => {
  let  [show, setShow] = useState(false)
  return (
    <div className="mainContainer">
      <nav>
        <div className="logo">
          <div className="foodlogo">🍔</div>
          <div>Mood For Food</div>
        </div>
        <ul className='listItems'>
          <li>
            <Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to={''} onClick={()=>setShow(!show)} style={{padding:"15px"}}><IoIosCart /><span style={{position:"absolute",bottom:"22px", left:"30px"}}>{cart.length}</span></Link></li>
        </ul>
      </nav>
       {show && <CartSideBar show={show} setShow={setShow} cart={cart} setCart={setCart}/>  }
      
    </div>
  )
}
export default Navbar