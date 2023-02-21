import React from "react";
import { MdOutlineAccountCircle } from "react-icons/md";
import book_svg from "../../../assets/logo.png";
import "./header.css";
const menu_items = ["Home", "Blog", "Subscription", "Publication", "About us"];
const Header = () => {
  return (
    <div className="header-container">
      <div className="Title">
        <img src={book_svg} className="logo_image"/>
        BOOKS
      </div>
      
      <div className="subcontent">
        <div className="listwrapper">
          <div className="navList">
            {menu_items.map((value, key) => (
              <div className="listItem">{value}</div>
            ))}
          </div>
        </div>
        
      </div>
      <div className="header-buttons">
        <div className="but">
            Login
        </div>
        <div className="but">
            Signup
        </div>
      </div>
      
    </div>
  );
};

export default Header;
