import React from 'react'

const Lunch = (props) => {
 const {image,title,price,text} = props
  return (
    <div className='breakFast'>
      <img src={image} alt="" />
      <div className='tp'>
        <h4>{title}</h4>
        <h4 className='price'>{price}</h4>
      </div>
      <article> {text} </article>
    </div>
  )
}

export default Lunch
