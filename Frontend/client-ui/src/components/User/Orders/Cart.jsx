import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Loader } from 'rsuite'
import { Link } from 'react-router-dom'
import Cart_Card from './Cart_Card'
const Cart = ({set_List_Item,item_list}) => {
  let {id} =useParams()
  const navigate = useNavigate()
  const [data,setData] = useState(null)
  const [load,setLoad] = useState(false)
  const [load_2,setLoad_2] =useState(false)
  const [p_value,setP_Value] = useState(0)
  const [bo_d,setBo_d] = useState([])
  var value = 0
  let data_p = []
  let book_ids = []
  let book_data = []
  const [message,setMessage] = ('')
  const [empty,setEmpty] = useState(true)
  const baseURL = `${process.env.REACT_APP_API_ADDRESS}`
  const baseURL_B = `${process.env.REACT_APP_API_ADDRESS}/book/`
  const fetch_data = async()=>{
    try{
      axios.get(`${baseURL}/cart/${id}`).then(async(response) => {
        data_p = await response.data
        console.log("data_p",data_p)
        setData(data_p)
        console.log("data",data)
        Count_Value()
        if (data_p.length !== 0){
          setEmpty(false)
          data_p.map((item)=>{book_ids.push(item.book_id)})
        }
        console.log(book_ids)
        book_data = {
          "item_list":
            book_ids.map((b)=>{
              return {
                "book_id":b,
                "quantity":1,
                "user_id": id
              }
            })
            
        }
        
        console.log(book_data)
        setBo_d(book_data)
       
      });
    }catch(err){
      console.error(err)
    }
    
    
    
  }
 
  const Count_Value = async()=>{
    let total = data_p.map(async(value)=>{
      const res = await axios.get(`${baseURL}/book/${value.book_id}`)
      console.log("price",res.data)
      
    })
    setTimeout(()=>{
    console.log(value)

    },5000)
    console.log(p_value)
  }
    
  
  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );
  async function makeRequest() {
    console.log('before');

    await delay(3000);

    console.log('after');
    setLoad(true)
    
    
  }


  const cart_checkout = async() =>{
      setLoad_2(true)
      console.log('checkout_data',bo_d)
  
  await axios.post(`${process.env.REACT_APP_STRIPE_ADDRESS}/create-checkout-session-cart`,bo_d).then((res)=>{
      console.log(res.data)
      setTimeout(()=>{
          const temp = res.data.item_list
          console.log(temp)
          window.location.replace(res.data.url)
          setLoad_2(false)
          window.localStorage.setItem('listdata',JSON.stringify(temp))
          console.log(item_list)
      },2000)
      
  })
  }

  useEffect(()=>{
    book_ids=[]
    fetch_data()
    
   makeRequest()
   
  },[])
  return (
    <div className='o-container'>
      {!empty? load?<>
      <div className='o-heading'>
      Cart
      </div>
      <div className='sp-line'></div>
      <>
      {data.map((item) => (
        
            <Cart_Card id={item.book_id} value={value} />
          
        ))}</>

        
        <div className='o-product-button-cont'>
      <button className='o-product-btn' onClick={cart_checkout}>
        {load_2?<Loader/>:"Checkout"}
        
      </button>
    </div>

      
     
      </>:<div className='loader-conatiner'>
  <Loader/>
  </div>:<>
  Cart Empty
  </>}
    </div>
  )
}

export default Cart