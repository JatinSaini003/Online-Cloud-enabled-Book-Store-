import React from 'react'
import "./header.css"
const Avtar_image = ({book_svg}) => {
  return (
    <div className="avatar-img">
          <img src={book_svg} className="a-img"/>
    </div>
  )
}

export default Avtar_image