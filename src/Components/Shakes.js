import React  from 'react'


const Shakes = (props) => {

    const{image,title,price,text} =props
   
  return (
    <div className='breakFast'>
       <div>
      <img src={image} alt="" />
      <div className='tp'>
        <h4>{title}</h4>
        <h4 className='price'>{price}</h4>
      </div>
      <article> {text} </article>
    </div>
    </div>
  )
}

export default Shakes
