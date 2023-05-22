import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useParams,useNavigate,Link } from 'react-router-dom'
import { Loader } from 'rsuite'

const Order_card=({id,dod,pay_mode,status})=>{
    const [b_data,setB_data] = useState()
    const[load,setLoad] =useState(false)
    var data_p = {}
    const baseURL = `http://${process.env.REACT_APP_API_ADDRESS}:5000/book/${id}`
    const baseURL_IMG = `http://${process.env.REACT_APP_API_ADDRESS}:5000/book_img/`
    
    
    const fetch_data = async()=>{
        try{
          axios.get(`${baseURL}`).then((response) => {
            data_p = response.data
            console.log(data_p)
           
            
          });
          
        }catch(err){
          console.error(err)
        }
        
        console.log("b_data",b_data)
        
        
      }
      const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
      );
      async function makeRequest() {
        console.log('before');
    
        await delay(3000);
    
        console.log('after');
        setLoad(true)
        setB_data(data_p)
        
      }
    
    useEffect(()=>{
      fetch_data()
      makeRequest()
      
    },[])
  
    return(
        <>
        
            {load?<>
                <Link to={`/book/${b_data.Book_id}`}><div className='o-product-box'>
              <div className='o-product-image'>
                <img src={`${baseURL_IMG}${b_data.name}`} alt={b_data.name} className='o-p-img'/>
              </div>
              <div className='o-product-details'>
                <div className = "o-product-name">
                  {b_data.name}
                </div>
                <div className='o-p-auth'>
                 BY: {b_data.author}
                </div>
                <div className='o-product-price'>
                ₹ {b_data.price}
                </div>
                <div className='o-product-date'>
                Ordered On: {dod}
                </div>
                <div className='o-product-status'>
                Status: {status}
                </div>
                <div className='o-product-pay_m'>
                Payment mode: {pay_mode}
                </div>
              </div>
            </div>
              </Link></>:<>
            <div className='loader-conatiner'>
  <Loader/>
  </div>
            </>}
            
          </>
    )
  }

export default Order_card