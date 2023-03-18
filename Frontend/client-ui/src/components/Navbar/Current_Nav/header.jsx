import React from "react";
import { MdOutlineAccountCircle } from "react-icons/md";
import { Link } from 'react-router-dom'
import book_svg from "../../../assets/2.png";
import book_svg_2 from "../../../assets/logo.png"
import "./header.css";
const menu_items = [{name:"Home",link:'/'}, {name:"E-books",link:'/ebook'}, {name:"Subscription",link:"/sub"}, {name:"Publication",link:'/publications'}, {name:"About us",link:'/about_us'}];
const Header = ({login}) => {
  return (
    <div className="header-container">
      <div className="Title">
        <img src={book_svg_2} className="logo_image"/>
        BOOKS
      </div>
      
      <div className="subcontent">
        <div className="listwrapper">
          <div className="navList">
            {menu_items.map((value, key) => (
              <Link to={value.link}>
              <div className="listItem">{value.name}</div></Link>
            ))}
          </div>
        </div>
        
      </div>
      {login?<>
      <div className="login-avatar">
        <div className="avatar-img">
          <img src={book_svg} className="a-img"/>
        </div>
        <div className="user_name">
          Jatin
        </div>
      </div>
      </>:<div className="header-buttons">
        <Link to="/login">
        <div className="but">
            Login
        </div>
        </Link>
        <Link to="/signup">
        <div className="but">
            Signup
        </div>
        </Link>
      </div>}
      
    </div>
  );
};

export default Header;
