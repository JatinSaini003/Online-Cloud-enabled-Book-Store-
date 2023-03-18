import React from 'react'
import { CCard,CCardImage,CCardTitle,CCardBody,CButton,CCardText } from '@coreui/react'
import './cardStyle.css'
const Sub_Card = ({ReactImg}) => {
  return (
    <div className='Sub-card-cont'>
        {/*<CCard style={{ width: '18rem' }}>
    2  <CCardImage orientation="top" src={ReactImg} />
    3  <CCardBody>
    4    <CCardTitle>Card title</CCardTitle>
    5    <CCardText>
    6      Some quick example text to build on the card title and make up the bulk of the card's content.
    7    </CCardText>
    8    <CButton href="#">Go somewhere</CButton>
    9  </CCardBody>
    10</CCard>*/}
    <div className="s-card-img">
        <img src={ReactImg} alt="image" className='s-img'/>
    </div>
    <div className="s-title">
        Basic
    </div>
    <div className="s-sub-title-price">
        $9
    </div>
    <div className="s-sub-title">
        Go now For week with Basic subscription Pack.
    </div>
    <div className="s-btn">
        <button className='s-button'>Buy Now</button>
    </div>
    </div>
  )
}

export default Sub_Card