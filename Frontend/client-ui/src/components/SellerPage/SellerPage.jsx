import React, { useEffect, useState } from 'react'
import "./SellerPageStyle.css"
import svg from '../../assets/books.svg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const SellerPage = ({userdata}) => {
    const navigate = useNavigate()
    const[seller,setSeller] = useState(false)
    const[click,setClick] = useState(false)
    const[name,setName] = useState("")
    const[auth,setAuth] = useState("")
    const[rel,setRel] = useState("")
    const[qty,setQty] = useState("")
    const[gen,setGen] = useState("")
    const[desp,setDesp] = useState("")
    const[price,setPrice] = useState("")
    const[msrp,setMsrp] = useState("")
    const[rate,setRate] = useState("")
    const[edt,setEdt] = useState("")
    const[pub,setPub] = useState("")
    const[cpy,setCpy] = useState("")
    const[img,setImg] = useState()
    const [message, setMessage] = useState("");

    const changeHandler = () =>{
        window.location.reload(true)
       
    }
    const handleClick = ()=>{
        setClick(!click)
    }

    const submitForm = async(e) =>{
        const form_data={
            "name":name,
            "price":price,
            "Release":rel,
            "genre":gen,
            "copy":cpy,
            "author":auth,
            "publisher":pub,
            "ratings":rate,
            "Msrp":msrp,
            "edition":edt,
            "atb":desp,
            "qty":qty
        }
         try{
            const response = await axios.post(`http://${process.env.REACT_APP_API_ADDRESS}:5000/add_books` ,form_data);
            console.log(response.data)
            changeHandler()

         }catch(err){
            console.error(err)
         }
    }

    let handleSubmit = async (e) => {
        console.log('clicked')
        e.preventDefault();
        const data =new FormData()
        data.append('file',img)
        
        try{
            const response = await axios.post(`http://${process.env.REACT_APP_API_ADDRESS}:5000/book_img/${name}`,data);
            submitForm()
            console.log(response.data)

        }catch(err){
            console.error(err)
        }
      };

      useEffect(()=>{
        const temp = JSON.parse(window.localStorage.getItem('userdata'))
        if (String(temp.username).includes('_seller')){
            setSeller(true)
        }else{
            setSeller(false)
            navigate('/login')
            alert("You are not a seller please login with seller account")
        }
      },[])

  return (
    <div className="signup-form-container">
        <h1 className='s-h1'>book{"'"}s details</h1>
        <div className="s-form">
          
          {!click?<>
            <label className='s-label'>
            Book Name:</label>
            <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
          <label className='s-label'>
            Book Release:</label>
            <input type="text" value={rel} onChange={(event) => setRel(event.target.value)} />
          <label className='s-label'>
            Genre:</label>
            <input type="text" value={gen} onChange={(event) => setGen(event.target.value)} />
            <label className='s-label'>
            Author:</label>
            <input type="text" value={auth} onChange={(event) => setAuth(event.target.value)} />
          
          <label className='s-label'>
            Quantity:</label>
            <input type="text" value={qty} onChange={(event) => setQty(event.target.value)} />
          
          <label className='s-label'>
            Book Description:</label >
            <input type="email" value={desp} onChange={(event) => setDesp(event.target.value)} /></>
            
            
            
            :<>

            <label className='s-label'>
            Book Price:</label>
            <input type="text" value={price} onChange={(event) => setPrice(event.target.value)} />
          <label className='s-label'>
            Book Msrp:</label>
            <input type="text" value={msrp} onChange={(event) => setMsrp(event.target.value)} />
          <label className='s-label'>
            Book Rating:</label>
            <input type="text" value={rate} onChange={(event) => setRate(event.target.value)} />
            <label className='s-label'>
            Edition:</label>
            <input type="text" value={edt} onChange={(event) => setEdt(event.target.value)} />
          
          <label className='s-label'>
            Book{"'"}s Publisher:</label>
            <input type="text" value={pub} onChange={(event) => setPub(event.target.value)} />
          
          <label className='s-label'>
            Copy:</label >
            <input type="email" value={cpy} onChange={(event) => setCpy(event.target.value)} />
            <label className="s-label link">
                Upload File
            </label>
            <input type="file" name="file" id="file" onChange={(e)=>setImg(e.target.files[0])} className='file-input'/>
            </>}
          
          {click?<><button onClick={handleSubmit} className="signup-button
          ">Submit</button>
          {click?<div className="previous-btn" onClick={handleClick}>
              Previous
          </div>:<></>}
          
          
          
          </>:<><button className='signup-button' onClick={handleClick}>Next</button></>}
          
          
        </div>
        <div className="login-options">
          <hr />
          
        </div>
      </div>
  )
}

export default SellerPage
