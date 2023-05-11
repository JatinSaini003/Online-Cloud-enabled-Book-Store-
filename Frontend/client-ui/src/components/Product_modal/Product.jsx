import React,{useEffect, useState} from "react";
import csm from "../../assets/csm.jpg";
import bleach from '../../assets/Shunsui Kyoraku.png'
import HorizontalScroll from "../New_Arrivals/Arrivals";
import StarRating from "../New_Arrivals/StarRating";
import axios from 'axios'
import "./p-style.css";
import { Loader } from 'rsuite'
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Product = ({userdata}) => {
  const navigate = useNavigate()
  const {id} = useParams()
  
  

  const [b_data,setB_data] = useState(null)
  
  const baseURL = `${process.env.REACT_APP_API_ADDRESS}/book/${id}`
  const baseURL_IMG = `${process.env.REACT_APP_API_ADDRESS}/book_img`
  const [load,setLoad] = React.useState(false)
  const fetch_data = async()=>{
    try{
      axios.get(`${baseURL}`).then((response) => {
        setB_data(response.data);
      });
      
    }catch(err){
      console.error(err)
    }
    
    console.log(b_data)
    
  }
  
  const Add_to_Cart = async() =>{
    if(userdata === null){
      navigate('/login')
    }else{
      console.log(userdata.id)
      const data = {
        "book_id":b_data.Book_id,
        "qty":1
      }
      const response = await axios.post(`http://${process.env.REACT_APP_API_ADDRESS}:5000/cart/${userdata.id}`,data)
      console.log(response.data)
      alert("Item added to Cart sucessfully")
    }
  }
  

  
  
  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );
  async function makeRequest() {
    console.log('before');

    await delay(1000);

    console.log('after');
    setLoad(true)
    
  }
  useEffect(() => {
   fetch_data()
   makeRequest()
   window.scrollTo(0,0)
  },[window.location.href])

  return (
    <>
    {load?<>
      <div className="Product-conatiner">
    <div className="product-image-p">
      <div className="p-image">
        <img src={`${baseURL_IMG}/${b_data.name}`} alt="image" className="pp-img" />
      </div>
      <div className="p-p">
        <div className="p-title">
          <div className="p-t-heading">{b_data.name}</div>
          <div className="t-p-sub">{`(${b_data.copy})`} | Released: {`${b_data.Release}`}</div>
        </div>
        <div className="p-subtitle">
          By: {`${b_data.author}`} (Author)
        </div>
        <div className="p-subtitle">
          | Publisher: {`${b_data.publisher}`}
        </div>
        <div className="p-reviews">
          <StarRating initialRating={b_data.ratings} />| Write a Review
        </div>
        <div className="p-price">
          {`₹ ${b_data.price}`}
          <div className="Mrp">{`₹ ${b_data.Msrp}`}</div>
        </div>
        <div className="p-shipping-detail">
          {`${b_data.edition}`}{" "}
          <div className="p-s-d-d">
            Ships within 16-18 Business Days{" "}
            <div className="">
              Free Shipping in India and low cost Worldwide.
            </div>
          </div>
        </div>
        <div className="p-buttons-set">
          <div className="p-buynow">
            <Link to={`/order/${b_data.Book_id}`}>
            <button className="p-btn-bn">Buy Now</button>
            </Link>
          </div>
          <div className="p-Addtocart">
           
            <button className="p-btn-atc" onClick={Add_to_Cart}>Add to Cart</button>
            
          </div>
          
        </div>
      </div>
    </div>
    <div className="product-details">
      <div className="p-d-heading">About the Book</div>
      <div className="p-d-p">
        <p>
          {`${b_data.atb}`}
        </p>
      </div>
    </div>
    <div className="similar">
      <HorizontalScroll heading={"Similar Products"} id={b_data.genre}/>
    </div>
    <div className="comments"></div>
  </div></>:<div className='loader-conatiner'>
  <Loader/>
  </div>}
  </>
  );
};

export default Product;
