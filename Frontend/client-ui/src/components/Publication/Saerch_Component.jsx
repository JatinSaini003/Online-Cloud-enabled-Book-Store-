import React, { useEffect, useState } from "react";
import "./Search-style.css";
import { HiSearch } from "react-icons/hi";
import { Dropdown } from "rsuite";
import axios from "axios";
import { Link } from "react-router-dom";
const Saerch_Component = ({ name, price, author, id ,atb}) => {
  const [s, sets] = useState([]);
  let search_by = "By Title";
  let d = [];
  const by = ["By Author", "By Genre", "By Title", "By Publication"];
  const short = (string) =>{
    if (string.length > 25) {
      string = string.substring(0, 150) + "...";
    }
    return string
  }
  useEffect(() => {}, []);

  return (
    <div className="search">
      <Link
        to={`/book/${id}`}
        class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow sm:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          class="object-cover w-30 rounded-t-lg h-30 md:h-auto md:rounded-none md:rounded-l-lg flex justify-center items-center"
          src={`${process.env.REACT_APP_API_ADDRESS}/book_img/${name}`}
          alt=""
        />
        <div class="flex flex-col justify-between p-4 leading-normal max-w-sm">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {name}
          </h5>
          <p class="text-gray-700 dark:text-gray-400">by: {author}</p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            About the book: {""}
            {short(atb)}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Saerch_Component;
