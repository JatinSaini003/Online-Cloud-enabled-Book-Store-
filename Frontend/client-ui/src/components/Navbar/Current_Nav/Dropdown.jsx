import React from 'react'
import "./dropdown.css"
import image from '../../../assets/2.png'
import { Link } from 'react-router-dom';
const data = [
    {title:"Account" ,link:"/Account/"},
    {title:"Orders" ,link:"/oders/"},
    {title:"Cart" ,link:"/cart/"},
    {title:"Help" ,link:"/help"}
]
const Dropdown = ({book_svg,handleLogin}) => {
    
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(!open);
    };
    let id=1;
  
    return (
      <div className="dropdown">
        
        <div onClick={handleOpen}><div className="login-avatar">
        <div className="avatar-img">
          <img src={image} className="a-img"/>
        </div>
        <div className="user_name">
          Jatin
      </div> </div></div>
        {open ? (
          <ul className="menu">
            {data.map((value,key)=>(
                
                    <li className="menu-item">
                        <Link to={`${value.link}${id}`} className="i-link">
                        <button>
                            {value.title}
                            </button>
                        </Link>
                    </li>
                
            ))}
            <li className="menu-item">
              <button onClick={handleLogin}>Sign Out</button>
            </li>
          </ul>
        ) : null}
        
      </div>
    );
  };

export default Dropdown