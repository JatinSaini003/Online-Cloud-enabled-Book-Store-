import React, { useState } from "react";
import "./style.css";
import images from "../../assets/csm.jpg";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { Loader } from "rsuite";


const HorizontalScroll = ({ heading,id }) => {
  const navigate = useNavigate()
  const [scrollX, setScrollX] = useState(0);


  const handleLeftClick = () => {
    const container = document.getElementById("items");
    const scrollAmount = container.clientWidth / 2;
    container.scrollBy({
      left: -scrollAmount,
      behavior: "smooth"
    });
  };

  const handleRightClick = () => {
    const container = document.getElementById("items");
    const scrollAmount = container.clientWidth / 2;
    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const handleScroll = (e) => {
    const { scrollLeft } = e.target;
    setScrollX(scrollLeft);
    scrollX.toFixed();
  };
  const [list_data,setList_data] = useState(null)
  const [wait,setWait] = useState(false)
  var baseURL = ""
  if(heading==="Similar Products"){
    baseURL = `${process.env.REACT_APP_API_ADDRESS}/gen/${id}`
  }else{
    baseURL = `${process.env.REACT_APP_API_ADDRESS}/gen/${heading}`
  }
  
  let newArray=[]
  const fetch_data = async()=>{
    try{
      axios.get(`${baseURL}`).then((response) => {
        setList_data(response.data)
        console.log(list_data)
        
      });
    }catch(err){
      console.error(err)
    }
    console.log(list_data)
    
    
  }
  const [load,setLoad] = React.useState(false)
  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );
  async function makeRequest(time) {
    console.log('before');

    await delay(time);

    console.log('after');
    setLoad(true)
  }

  const short = (string) =>{
    if (string.length > 25) {
      string = string.substring(0, 15) + "...";
    }
    return string
  }

  useEffect(()=>{
    fetch_data()
    //check_len()
    
    makeRequest(1000)

  },[])
  
  const check_len=()=>{
    if (newArray.length===0){
      setWait(!wait)
    }
  }

  const fresh = ()=>{
    setTimeout(()=>{
      
    },300)
  }

  return (
    
    <div className="s-container" id="s-container" onScroll={handleScroll}>
      {load?<><div className="heading">{heading}</div>
    {wait?<>
    Upcoming
    </>:<><div className="items" id="items">
        {list_data.map((item) => (
          <Link to={`/book/${item.Book_id}`} refresh="true" onClick={()=>navigate(`/book/${item.Book_id}`)}>
          <div key={item.Book_id} className="item">
            <div className="img-cont">
              <img src={`${process.env.REACT_APP_API_ADDRESS}/book_img/${item.name.replaceAll(' ','_')}`} alt={item.name} />
            </div>

            <div className="title">{short(item.name)}</div>
            <div className="author-name">{item.author}</div>
            <div className="price">{`₹ ${item.price}`}</div>
          </div>
          </Link>
        ))}
      </div>

      <div className="left arrow" onClick={handleLeftClick}>
        <MdArrowBackIos />
      </div>
      <div className="right arrow" onClick={handleRightClick}>
        <MdArrowForwardIos />
      </div></>}</>:<>
        <div className='loader-conatiner'>
  <Loader/>
  </div>
      </>}
      
      
    </div>

  );
};

export default HorizontalScroll;
