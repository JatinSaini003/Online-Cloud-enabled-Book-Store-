import React, { useState } from 'react';
import './style.css';

const data = [
  {
    id: 1,
    title: 'Product 1',
    image: 'https://via.placeholder.com/200x200?text=Product+1',
  },
  {
    id: 2,
    title: 'Product 2',
    image: 'https://via.placeholder.com/200x200?text=Product+2',
  },
  {
    id: 3,
    title: 'Product 3',
    image: 'https://via.placeholder.com/200x200?text=Product+3',
  },
  {
    id: 4,
    title: 'Product 4',
    image: 'https://via.placeholder.com/200x200?text=Product+4',
  },
  {
    id: 5,
    title: 'Product 5',
    image: 'https://via.placeholder.com/200x200?text=Product+5',
  },
  {
    id: 5,
    title: 'Product 5',
    image: 'https://via.placeholder.com/200x200?text=Product+5',
  },
  {
    id: 5,
    title: 'Product 5',
    image: 'https://via.placeholder.com/200x200?text=Product+5',
  },
  {
    id: 5,
    title: 'Product 5',
    image: 'https://via.placeholder.com/200x200?text=Product+5',
  },
  {
    id: 5,
    title: 'Product 5',
    image: 'https://via.placeholder.com/200x200?text=Product+5',
  },
  {
    id: 5,
    title: 'Product 5',
    image: 'https://via.placeholder.com/200x200?text=Product+5',
  },
  {
    id: 5,
    title: 'Product 5',
    image: 'https://via.placeholder.com/200x200?text=Product+5',
  },
  {
    id: 5,
    title: 'Product 5',
    image: 'https://via.placeholder.com/200x200?text=Product+5',
  },
  {
    id: 5,
    title: 'Product 5',
    image: 'https://via.placeholder.com/200x200?text=Product+5',
  },
  {
    id: 5,
    title: 'Product 5',
    image: 'https://via.placeholder.com/200x200?text=Product+5',
  },
  {
    id: 5,
    title: 'Product 5',
    image: 'https://via.placeholder.com/200x200?text=Product+5',
  },
  {
    id: 5,
    title: 'Product 5',
    image: 'https://via.placeholder.com/200x200?text=Product+5',
  },
];

const HorizontalScroll = ({ heading }) => {
  const [scrollX, setScrollX] = useState(0);

  const handleLeftClick = () => {
    const container = document.getElementById('s-container');
    const scrollAmount = container.clientWidth / 2;
    container.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth',
    });
  };

  const handleRightClick = () => {
    const container = document.getElementById('s-container');
    const scrollAmount = container.clientWidth / 2;
    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    });
  };

  const handleScroll = (e) => {
    const { scrollLeft } = e.target;
    setScrollX(scrollLeft);
  };

  return (
    <div className="s-container" id="s-container" onScroll={handleScroll}>
      <div className="heading">{heading}</div>
      <div className="items">
        {data.map((item) => (
          <div key={item.id} className="item">
            <img src={item.image} alt={item.title} />
            <div className="title">{item.title}</div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default HorizontalScroll;
