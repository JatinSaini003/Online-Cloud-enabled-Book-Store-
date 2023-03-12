import React from 'react'
import "./Nav-style.css"
import { RxCross2  } from 'react-icons/rx'
import {} from 'framer-motion'
const menu_items = ["Home", "E-books", "Subscription", "Publication", "About us"];
const Navbar = ({toggle,open}) => {
  return (
    <div className={open?'Toggle-nav':'Toggle-nav-close'}>
      {open?<><div className="close-icon">
        <RxCross2 onClick={toggle}/>
      </div>
      <div className="t-nav-container" onClick={toggle}>
      <span className='Line-sepreator'></span>
        <div className="t-nav-listItems">
        {menu_items.map((value, key) => (
              <div className="t-listItem">{value}</div>
            ))}
        </div>
        <span className='Line-sepreator'></span>
        <div className="t-nav-buttons">
        
        <div className="t-but">
            Login
        </div>
        <div className="t-but">
            Signup
        </div>
      </div>
      <div className="t-foot">
        <div className="tf-title">
          BOOKS
        </div>
        <div className="tf-sub-title">
        Copyright © 2023 
        </div>
      </div>
      </div></>:<></>}
      
      
    </div>
  )
}

export default Navbar