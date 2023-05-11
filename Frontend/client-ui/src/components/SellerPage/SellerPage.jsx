import React, { useState } from 'react'
import "./SellerPageStyle.css"
import svg from '../../assets/books.svg'
import axios from 'axios'
const SellerPage = () => {
    const[page,setPage] = useState(false)

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
            const response = await axios.post(`${process.env.REACT_APP_API_ADDRESS}/add_books` ,form_data);
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



  return (
    <div className='spage-container'>
        <div className='sp-cont'>
            <div className='sp-heading'>
                Seller{"'s"} page. {`${process.env.REACT_APP_API_ADDRESS}`}
            </div>
            <div className='sp-line'>

            </div>
            <div className='sp-form-div'>
            <div className='sp-form-container'>
                <form className='sp-form'>
                    <div className='sp-image-cont'>
                    <div className='sp-form-image'>
                        <img src={svg} alt='Book-SVG' className='sp-img'/>
                        
                    </div>
                    </div>
                    <div className='sp-form-content'>
                    <div className="formbold-main-wrapper">
  
                        <div class="formbold-form-wrapper">
                            {page?<>
                                <div className="formbold-mb-5">
                                <label className='sp-form-label'>
                                Book Price:
                                </label>
                                <input
                                type="text"
                                name="Price"
                                id="price"
                                placeholder="Enter Book's price"
                                value={price}
                                onChange={(e)=>setPrice(e.target.value)}
                                className="formbold-form-input"
                                />
                            </div>
                            <div className="formbold-mb-5">
                                <label className='sp-form-label'>
                                Msrp:
                                </label>
                                <input
                                type="text"
                                name="msrp"
                                id="msrp"
                                value={msrp}
                                onChange={(e)=>setMsrp(e.target.value)}
                                placeholder="Enter book's msrp"
                                className="formbold-form-input"
                                />
                            </div>
                            
                            <div className="formbold-mb-5">
                                <label className='sp-form-label'>
                                Book Rating:
                                </label>
                                <input
                                type="text"
                                name="rating"
                                id="rate"
                                value={rate}
                                onChange={(e)=>setRate(e.target.value)}
                                placeholder="Enter Book's Rating"
                                className="formbold-form-input"
                                />
                            </div>
                            <div className="formbold-mb-5">
                                <label className='sp-form-label'>
                                Edition:
                                </label>
                                <input
                                type="text"
                                name="edt"
                                id="edt"
                                value={edt}
                                onChange={(e)=>setEdt(e.target.value)}
                                placeholder="Enter Book's Edition"
                                className="formbold-form-input"
                                />
                            </div>
                            <div className="formbold-mb-5">
                                <label className='sp-form-label'>
                                Book{"'s"} Publisher:
                                </label>
                                <input
                                type="text"
                                name="publisher"
                                id="publisher"
                                value={pub}
                                onChange={(e)=>setPub(e.target.value)}
                                placeholder="Enter Book's Publisher"
                                className="formbold-form-input"
                                />
                                
                                
                            </div>
                            <div className="formbold-mb-5">
                                <label className='sp-form-label'>
                                Copy:
                                </label>
                                <input
                                type="text"
                                name="cpy"
                                id="cpy"
                                value={cpy}
                                onChange={(e)=>setCpy(e.target.value)}
                                placeholder="Enter Book's Copy"
                                className="formbold-form-input"
                                />
                            </div>
                            <div className="sp-file-upload">
                                <label className="sp-form-label-up">
                                Upload File
                                </label>
                                <input type="file" name="file" id="file" onChange={(e)=>setImg(e.target.files[0])}/>
                            </div>

                            </>:<>
                            <div className="formbold-mb-5">
                                <label className='sp-form-label'>
                                Book Name:
                                </label>
                                <input
                                type="text"
                                name="name"
                                id="name"
                                value={name}
                                onChange={(e)=>setName(e.target.value)}
                                placeholder="Enter Book name"
                                className="formbold-form-input"
                                />
                            </div>
                            <div className="formbold-mb-5">
                                <label className='sp-form-label'>
                                Author:
                                </label>
                                <input
                                type="text"
                                name="author"
                                id="author"
                                value={auth}
                                onChange={(e)=>setAuth(e.target.value)}
                                placeholder="Enter Author's name"
                                className="formbold-form-input"
                                />
                            </div>
                            
                            <div className="formbold-mb-5">
                                <label className='sp-form-label'>
                                Book Release:
                                </label>
                                <input
                                type="text"
                                name="release"
                                id="release"
                                value={rel}
                                onChange={(e)=>setRel(e.target.value)}
                                placeholder="Enter Book's Price"
                                className="formbold-form-input"
                                />
                            </div>
                            <div className="formbold-mb-5">
                                <label className='sp-form-label'>
                                Quantity:
                                </label>
                                <input
                                type="text"
                                name="qty"
                                id="qty"
                                value={qty}
                                onChange={(e)=>setQty(e.target.value)}
                                placeholder="Enter Book's Price"
                                className="formbold-form-input"
                                />
                            </div>
                            <div className="formbold-mb-5">
                                <label className='sp-form-label'>
                                Genre:
                                </label>
                                <input
                                type="text"
                                name="gen"
                                id="gen"
                                value={gen}
                                onChange={(e)=>setGen(e.target.value)}
                                placeholder="Enter Book's Genre"
                                className="formbold-form-input"
                                />
                            </div>
                            <div className="formbold-mb-5">
                                <label className='sp-form-label'>
                                Book{"'s"} Description:
                                </label>
                                
                                <textarea id="description" name="descripttion" rows="4" cols="50" placeholder="Enter Book's description" className="formbold-form-input" value={desp} onChange={(e)=>setDesp(e.target.value)}>
                                
                                </textarea>
                            </div>
                            
                            </>}
                            

                           
                           
                        </div>
                         
                        
                        
                        </div>
                    </div>
                    
                </form>
                {page?
                            <>
                            <div className='sp-submit-container'>
                           
                           <button className='sp-form-button' onClick={handleSubmit}>
                               Submit
                           </button>
                           </div>
                            </>:<>
                            <div className='sp-submit-container'>
                           
                        <button className='sp-form-button' onClick={()=>setPage(!page)}>
                            Next
                        </button>
                        </div>
                            </>}
            </div>
            </div>
        </div>
    </div>
  )
}

export default SellerPage