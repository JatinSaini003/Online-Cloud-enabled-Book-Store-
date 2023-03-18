import React from 'react'
import HorizontalScroll from '../New_Arrivals/Arrivals'
import Saerch_Component from './Saerch_Component'
import "./style.css"
const Publication = () => {
  return (
    <div className='p-cont'>
        <div className="search-compo">
            <Saerch_Component/>
        </div>
        <div className="scroll-genre">
            <HorizontalScroll heading={"Genre"} id={"a"}/>
            <HorizontalScroll heading={"Genre"} id={"b"}/>
            <HorizontalScroll heading={"Genre"} id={"c"}/>
            <HorizontalScroll heading={"Genre"} id={"d"}/>
            <HorizontalScroll heading={"Genre"} id={"e"}/>
            <HorizontalScroll heading={"Genre"} id={"f"}/>
            <HorizontalScroll heading={"Genre"} id={"g"}/>
        </div>
    </div>
  )
}

export default Publication