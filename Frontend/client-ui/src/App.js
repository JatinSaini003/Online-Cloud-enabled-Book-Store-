// import logo from './logo.svg';
import './App.css';
// import Navbar from './components/Navbar/toggle_Navbar/Navbar';
import Header from './components/Navbar/Current_Nav/header';
import Hero from './components/Heropage/Hero';
import LoginForm from './components/Login/Signup/login';
import SignupForm from './components/Login/Signup/signup';
import Nav from './components/Navbar/New_nav/nav';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Footer from './components/Footer/Footer';
import Product from './components/Product_modal/Product';
import Ebooks from './components/E-books/index';
import SubCards from './components/Subscriptions';
import Publication from './components/Publication';
import Account from './components/User/Account';
import SellerPage from './components/SellerPage/SellerPage';
function App() {
  const [login, setLogin] = useState(false)
  const handleLogin = () => {
    setLogin(!login)
  }
  return (
    <div className="App">
      <Nav login={login} />
      <Header login={login} handleLogin={handleLogin} />
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/login' element={<LoginForm/>}/>
        <Route path="/signup" element={<SignupForm/>}/>
        <Route path="/book/:id" element={<Product/>}/>
        <Route path="/ebook" element={<E_books/>}/>
        <Route path="/sub" element={<SubCards/>}/>
        <Route path="/publications" element={<Publication/>}/>
        <Route path="/account/:id" element={<Account/>}/>
        <Route path="/seller/:id" element={<SellerPage/>}/>
      </Routes>
      <Footer />


    </div>
  );
}

export default App;
