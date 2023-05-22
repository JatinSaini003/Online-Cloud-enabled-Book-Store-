// import logo from './logo.svg';
import './App.css';
// import Navbar from './components/Navbar/toggle_Navbar/Navbar';
import Header from './components/Navbar/Current_Nav/header';
import Hero from './components/Heropage/Hero';
import LoginForm from './components/Login/Signup/login';
import SignupForm from './components/Login/Signup/signup';
import Nav from './components/Navbar/New_nav/nav';
import { Route, Routes, json, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Footer from './components/Footer/Footer';
import Product from './components/Product_modal/Product';
import E_books from './components/E-books/index';
import SubCards from './components/Subscriptions';
import Publication from './components/Publication';
import Account from './components/User/Account';
import SellerPage from './components/SellerPage/SellerPage';
import Orders from './components/User/Orders/orders';
import axios from 'axios';
import Cart from './components/User/Orders/Cart';
import { useEffect } from 'react';
import Checkout from './components/User/Orders/Checkout';
import Success from './components/User/Success';
import Cancel from './components/User/Cancel';
import Order_list from './components/User/Orders/Order_list';
import Success_Cart from './components/User/Success_Cart';
import Login_Page from './components/Pages/Login_Page';
import Login_Seller from './components/Login/Signup/Login_Seller';
import Signup_Seller from './components/Login/Signup/Signup_Seller';
import Signup_page from './components/Pages/Signup_page';



function App() {


  const navigate = useNavigate()
  const [login, setLogin] = useState(false)
  const [userdata,setUserdata] = useState(null)
  const [user,setUser] =useState(null)
  const [item_list,set_Item_List] = useState([])
  const handleLogin = () => {
    
    
    
    
    if(!login){
      window.localStorage.setItem('login',!login)
    
    }else{
      window.localStorage.clear()
    }
    
    
  }
  useEffect(()=>{
    setLogin(window.localStorage.getItem('login'))
    if(JSON.parse(window.localStorage.getItem('userdata'))===null){
      setLogin(false)
      window.localStorage.setItem('login',false)
    }
    if(login){
      setUserdata(JSON.parse(window.localStorage.getItem('userdata')))
    }

    
    
   
    
    
  })
  
  return (
    <div className="App">
      <Nav login={login} handleLogin={handleLogin} userdata={userdata}/>
      <Header login={login} handleLogin={handleLogin} userdata={userdata} />
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/login_customer' element={<LoginForm login={login}  handleLogin={handleLogin} userdata={userdata}  setUser={setUser}  setUserdata={setUserdata} />}/>
        <Route path="/signup" element={<Signup_page/>}/>
        <Route path="/signup_customer" element={<SignupForm/>}/>
        <Route path="/signup_seller" element={<Signup_Seller/>}/>

        <Route path="/book/:id" element={<Product userdata={userdata}/>}/>
        <Route path="/ebook" element={<E_books/>}/>
        <Route path="/sub" element={<SubCards/>}/>
        <Route path="/publications" element={<Publication/>}/>
        <Route path="/account/:id" element={<Account userdata={userdata}/>}/>
        <Route path="/seller/:id" element={<SellerPage userdata={userdata}/>}/>
        <Route path="/order/:id" element={<Orders userdata={userdata}/>}/>
        <Route path="/cart/:id" element={<Cart userdata={userdata} item_list={item_list} set_List_Item={set_Item_List}/>}/>
        <Route path="/checkout_session" element={<Checkout/>}/>
        <Route path="/success" element={<Success/>}/>
        <Route path="/success_cart" element={<Success_Cart item_list={item_list}/>}/>
        <Route path="/cancel" element={<Cancel/>}/>
        <Route path="/orders/:id" element={<Order_list/>}/>
        <Route path="/login" element={<Login_Page/>}/>
        <Route path="/login_seller" element={<Login_Seller login={login}  handleLogin={handleLogin} userdata={userdata}  setUser={setUser}  setUserdata={setUserdata}/>}/>
      </Routes>
      <Footer />


    </div>
  );
}

export default App;
