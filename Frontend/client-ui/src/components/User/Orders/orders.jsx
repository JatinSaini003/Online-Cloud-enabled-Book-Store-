import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { Loader } from 'rsuite'
import "./orders.css"
const Orders = ({userdata}) => {
  const navigate = useNavigate()
  let {id} =useParams()
  const [data,setData] = useState()
  const [load,setLoad] =useState(false)
  const baseURL = `http://${process.env.REACT_APP_API_ADDRESS}:5000/book/${id}`
  const baseURL_IMG = `http://${process.env.REACT_APP_API_ADDRESS}:5000/book_img/`
  const fetch_data = async()=>{
    
    try{
      axios.get(`${baseURL}`).then((response) => {
        setData(response.data);
      });
    }catch(err){
      console.error(err)
    }
    
    console.log(data)
    
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

  const Add_to_Cart = async() =>{
    if(userdata === null){
      navigate('/login')
    }else{
      navigate(`/checkout_session?user_id=${userdata.id}&book_id=${data.Book_id}`)
    }
  }

  useEffect(()=>{
    fetch_data();
    makeRequest()
  },[])

  return (
    <div className='o-container'>
      {load?<>
      <div className='o-heading'>
        Order Page
      </div>
      <div className='sp-line'></div>
      
      <div className='o-product'>
      <Link to={`/book/${data.Book_id}`}>
        <div className='o-product-box'>
          <div className='o-product-image'>
            <img src={`${baseURL_IMG}${data.name}`} alt={data.name} className='o-p-img'/>
          </div>
          <div className='o-product-details'>
            <div className = "o-product-name">
              {data.name}
            </div>
            <div className='o-p-auth'>
             BY: {data.author}
            </div>
            <div className='o-product-price'>
            ₹ {data.price}
            </div>
          </div>
        </div>
        </Link>
        <div className='o-product-button-cont'>
          
        <button className='o-product-btn' onClick={Add_to_Cart}>
          Checkout
        </button>
        
      </div>
      </div>
      
      </>:<div className='loader-conatiner'>
  <Loader/>
  </div>}
    </div>
  )
}

export default Orders