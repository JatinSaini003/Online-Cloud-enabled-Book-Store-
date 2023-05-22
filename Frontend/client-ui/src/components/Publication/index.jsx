import React from "react";
import HorizontalScroll from "../New_Arrivals/Arrivals";
import Saerch_Component from "./Saerch_Component";
import "./style.css";
import { HiSearch } from "react-icons/hi";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const Publication = () => {
  const [search, setSearch] = useState("");
  const [load,setLoad] = useState()
  const [data, setData] = useState([{ name: "search anything" }]);

  const handleSubmit = (e) => {

  }
  useEffect(()=>{
    setLoad(false)
    axios.get(`http://${process.env.REACT_APP_API_ADDRESS}:5000/books`).then((res)=>{
      let d = res.data
      console.log(d)
      setData(d)
    setLoad(true)
    })
  },[])
  return (
    <div className="p-cont">
      <div className="search-compo">
        <div className="search">
          <div className="search-conatiner">
            <div className="search-dropdown"></div>
            <div className="search-input">
              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    handleSubmit();
                  }
                }}
              />
            </div>
            <button
              className="search-logo"
              type="submit"
              onClick={handleSubmit}
            >
              <HiSearch />
            </button>
          </div>
        </div>
      </div>{
        load?(
          <div className="scroll-genre">
        {data.filter((value) => {
            if (search === "") {
              return value;
            } else if (
              value.name
                .toLocaleLowerCase()
                .includes(search.toLocaleLowerCase())
            ) {
              return value;
            }
          })
          .map((item) => 
            <Saerch_Component name={item.name} price={item.price} author={item.author} id={item.Book_id} atb={item.atb}/>
          )}
      </div>
        ):(
          <h4>Loading......</h4>
        )
      }
      
    </div>
  );
};

export default Publication;
