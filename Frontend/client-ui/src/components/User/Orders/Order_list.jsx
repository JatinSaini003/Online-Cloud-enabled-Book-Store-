import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useParams,useNavigate,Link } from 'react-router-dom'
import { Loader } from 'rsuite'
import Order_card from './Order_card'
const Order_list = ({userdata}) => {
    const navigate = useNavigate()
  let {id} =useParams()
  const [data,setData] = useState()
  const [load,setLoad] =useState(false)
  const baseURL = `${process.env.REACT_APP_API_ADDRESS}/orders/${id}`
  const baseURL_IMG = `${process.env.REACT_APP_API_ADDRESS}/book_img/`
  let data_arr = []
  const fetch_data = async()=>{
    
    try{
      axios.get(`${baseURL}`).then((response) => {
        data_arr = response.data
        console.log(response.data)
        
        console.log("data",data)
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
    console.log(data_arr)
    setData(data_arr);
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
        {data.map((value)=>(
           <Order_card id={value.book_id} dod={value.dod} status={value.status} pay_mode={value.pay_mode}/>
        ))}
      
        
          
        
        
      
      </div>
      
      </>:<div className='loader-conatiner'>
  <Loader/>
  </div>}
    </div>
  )
}

export default Order_list