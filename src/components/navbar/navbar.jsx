import React, { useState } from 'react';
import './navbar.css';
import { assets} from "../../assets/assets"
import { Link} from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const Navbar = ({setShowLogin}) => {
  const [menu,setMenu]=useState("Home")
  return (
    <div className='navbar'>
<Link to={'/'}><img src={assets.logo} className='logo' alt="" /></Link>
<ul className="navbar-menu">
  <Link to='/' onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
  <a href={'#exploreMenu'} onClick={()=>setMenu("Menu")}className={menu==="Menu"?"active":""}>Menu</a>
  <a href='#app-download' onClick={()=>setMenu("Mobile-app")}className={menu==="Mobile-app"?"active":""}>Moblie App</a>
  <a href='#footer' onClick={()=>setMenu('Contact-us')}className={menu==="Contact-us"? "active":""}>Contact Us</a>
</ul>
<div className="navbar-right">
  <img src={assets.search_icon} alt="" />

<div className="navbar-search">
  <Link to={'./cart'}><img src={assets.basket_icon} alt="" /><div className="dot"></div></Link></div>
 <button onClick={()=>setShowLogin(true)}>Sign-in</button>

    </div></div>
  )
}

export default Navbar
