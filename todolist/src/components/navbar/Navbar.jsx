import React, {useState} from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [menu, setMenu] = useState("home")
  return (
    <div className='navbar'>
      <ul className='navbar-menu'>
        <li onClick={() => { setMenu("home")}}><Link style={{textDecoration: 'none'}} to="/">Home</Link>{menu === "home"? <hr />: <></>}</li>
        <li onClick={() => { setMenu("task")}}><Link style={{textDecoration: 'none'}} to="task">Tasks</Link>{menu === "task"? <hr />: <></>}</li>
        <li><Link style={{textDecoration: 'none'}} to="task">ContactUs</Link>{menu === "contactUs"? <hr />: <></>}</li>
      </ul>

      <div className="login">
        <button><Link style={{textDecoration: 'none'}} to="login">Login</Link></button>
      </div>
    </div>
  )
}

export default Navbar
