import React from 'react'
import image_svg from "../../assets/undraw_books_re_8gea.svg"
import Carousel from '../carousel/Carousel_3'
import HorizontalScroll from '../New_Arrivals/Arrivals'
import "./Hero.css"
const Hero = () => {
  const images = [
    
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
       
   
    
      "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
       
   
    
      "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
       
   
    
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
       
   
    
      "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
       
   
    
      "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
       
   
    
      "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
       
   
    
      "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",

   
    
      "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
      
  ];
  const newArrivals = [
    {
      name: "Product 1",
      price: "$19.99",
      image: "https://picsum.photos/200/300?random=1",
    },
    {
      name: "Product 2",
      price: "$24.99",
      image: "https://picsum.photos/200/300?random=2",
    },
    {
      name: "Product 3",
      price: "$14.99",
      image: "https://picsum.photos/200/300?random=3",
    },
    {
      name: "Product 4",
      price: "$29.99",
      image: "https://picsum.photos/200/300?random=4",
    },
    {
      name: "Product 5",
      price: "$34.99",
      image: "https://picsum.photos/200/300?random=5",
    },
    {
      name: "Product 5",
      price: "$34.99",
      image: "https://picsum.photos/200/300?random=5",
    },
    {
      name: "Product 5",
      price: "$34.99",
      image: "https://picsum.photos/200/300?random=5",
    },
    {
      name: "Product 5",
      price: "$34.99",
      image: "https://picsum.photos/200/300?random=5",
    },
    {
      name: "Product 5",
      price: "$34.99",
      image: "https://picsum.photos/200/300?random=5",
    },
    {
      name: "Product 5",
      price: "$34.99",
      image: "https://picsum.photos/200/300?random=5",
    },
    {
      name: "Product 5",
      price: "$34.99",
      image: "https://picsum.photos/200/300?random=5",
    },
    {
      name: "Product 5",
      price: "$34.99",
      image: "https://picsum.photos/200/300?random=5",
    },
    {
      name: "Product 5",
      price: "$34.99",
      image: "https://picsum.photos/200/300?random=5",
    },
    {
      name: "Product 5",
      price: "$34.99",
      image: "https://picsum.photos/200/300?random=5",
    },
    {
      name: "Product 5",
      price: "$34.99",
      image: "https://picsum.photos/200/300?random=5",
    },
    {
      name: "Product 5",
      price: "$34.99",
      image: "https://picsum.photos/200/300?random=5",
    },
    {
      name: "Product 5",
      price: "$34.99",
      image: "https://picsum.photos/200/300?random=5",
    },
    {
      name: "Product 5",
      price: "$34.99",
      image: "https://picsum.photos/200/300?random=5",
    },
    {
      name: "Product 5",
      price: "$34.99",
      image: "https://picsum.photos/200/300?random=5",
    },
    {
      name: "Product 5",
      price: "$34.99",
      image: "https://picsum.photos/200/300?random=5",
    },
    {
      name: "Product 5",
      price: "$34.99",
      image: "https://picsum.photos/200/300?random=5",
    },
    {
      name: "Product 5",
      price: "$34.99",
      image: "https://picsum.photos/200/300?random=5",
    },
    {
      name: "Product 5",
      price: "$34.99",
      image: "https://picsum.photos/200/300?random=5",
    },
    {
      name: "Product 5",
      price: "$34.99",
      image: "https://picsum.photos/200/300?random=5",
    },
    {
      name: "Product 5",
      price: "$34.99",
      image: "https://picsum.photos/200/300?random=5",
    },
  ];
  return (
    <div className='hero-container'>
        <Carousel images={images}/>
        <HorizontalScroll heading={"New Arrivals"}/>
    </div>
  )
}

export default Hero