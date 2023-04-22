import React, { useState } from "react";
import "./style.css";
import images from "../../assets/csm.jpg";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
const data = [
  {
    id: 1,
    title: "Product 1",
    image: "https://via.placeholder.com/200x200?text=Product+1",
    price: "1000",
  },
  {
    id: 2,
    title: "Product 2",
    image: images,
    price: "1000",
  },
  {
    id: 3,
    title: "Product 3",
    image: "https://via.placeholder.com/200x200?text=Product+3",
    price: "1000",
  },
  {
    id: 4,
    title: "Product 4",
    image: "https://via.placeholder.com/200x200?text=Product+4",
    price: "1000",
  },
  {
    id: 5,
    title: "Product 5",
    image: "https://via.placeholder.com/200x200?text=Product+5",
    price: "1000",
  },
  {
    id: 5,
    title: "Product 5",
    image: "https://via.placeholder.com/200x200?text=Product+5",
    price: "1000",
  },
  {
    id: 5,
    title: "Product 5",
    image: "https://via.placeholder.com/200x200?text=Product+5",
    price: "1000",
  },
  {
    id: 5,
    title: "Product 5",
    image: "https://via.placeholder.com/200x200?text=Product+5",
    price: "1000",
  },
  {
    id: 5,
    title: "Product 5",
    image: "https://via.placeholder.com/200x200?text=Product+5",
    price: "1000",
  },
  {
    id: 5,
    title: "Product 5",
    image: "https://via.placeholder.com/200x200?text=Product+5",
    price: "1000",
  },
  {
    id: 5,
    title: "Product 5",
    image: "https://via.placeholder.com/200x200?text=Product+5",
    price: "1000",
  },
  {
    id: 5,
    title: "Product 5",
    image: "https://via.placeholder.com/200x200?text=Product+5",
    price: "1000",
  },
  {
    id: 5,
    title: "Product 5",
    image: "https://via.placeholder.com/200x200?text=Product+5",
    price: "1000",
  },
  {
    id: 5,
    title: "Product 5",
    image: "https://via.placeholder.com/200x200?text=Product+5",
    price: "1000",
  },
  {
    id: 5,
    title: "Product 5",
    image: "https://via.placeholder.com/200x200?text=Product+5",
    price: "1000",
  },
  {
    id: 5,
    title: "Product 5",
    image: "https://via.placeholder.com/200x200?text=Product+5",
    price: "1000",
  },
];

const HorizontalScroll = ({ heading,id }) => {
  const [scrollX, setScrollX] = useState(0);


  const handleLeftClick = () => {
    const container = document.getElementById("items");
    const scrollAmount = container.clientWidth / 2;
    container.scrollBy({
      left: -scrollAmount,
      behavior: "smooth"
    });
  };

  const handleRightClick = () => {
    const container = document.getElementById("items");
    const scrollAmount = container.clientWidth / 2;
    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const handleScroll = (e) => {
    const { scrollLeft } = e.target;
    setScrollX(scrollLeft);
    scrollX.toFixed();
  };



  return (
    <div className="s-container" id="s-container" onScroll={handleScroll}>
      <div className="heading">{heading}</div>

      <div className="items" id="items">
        {data.map((item) => (
          <Link to='/book/1'>
          <div key={item.id} className="item">
            <div className="img-cont">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="title">{item.title}</div>
            <div className="author-name">{item.author}</div>
            <div className="price">{item.price}</div>
          </div>
          </Link>
        ))}
      </div>

      <div className="left arrow" onClick={handleLeftClick}>
        <MdArrowBackIos />
      </div>
      <div className="right arrow" onClick={handleRightClick}>
        <MdArrowForwardIos />
      </div>
    </div>

  );
};

export default HorizontalScroll;
