import React from 'react'
import "./header.css"
const menu_items = ["Home","Blog","Subscription","About Us","Publication"]
const Header = () => {
  return (
    <div className='header-container'>
        <div className='Title'>
            B00k5..
        </div>
        <div className="listwrapper">
            <div className='navList'>
                {menu_items.map((value,key)=>(
                    <div className='listItem'>{value}</div>
                ))}
                
            </div>
        </div>
    </div>
  )
}

export default Header