import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/toggle_Navbar/Navbar';
import Header from './components/Navbar/Current_Nav/header';
import Hero from './components/Heropage/Hero';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Hero/>
      
    </div>
  );
}

export default App;
