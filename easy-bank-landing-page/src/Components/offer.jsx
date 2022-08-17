import React from 'react'
import { UIData } from '../API'

const Offer = () => {


  return (
    <article className='Offer'>
      <h2>Why choose Easybank</h2>
      <p className='top'>  We leverage Open Banking to turn your bank account into your financial hub. Control
        your finances like never before.</p>
      <div className='Offers-con'>
      {UIData.offer.map((item, index) => {
        return <div key={index} className="Offers">
        <img src={(require("../images/"+item.img+".svg"))} alt='pic' />
        <h3>{item.title}</h3>
        <p>{item.content}</p>
        </div>
      })}
      </div>
    </article>
  )
}

export default Offer