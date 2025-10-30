import React from 'react'
import '../App.css'
const Book = () => {
    function handleClick(){
        alert("book added in cart successfully")
    }
  return (
    <div className='card'>
      <img src="https://junipercustom.com/cdn/shop/files/EPML-modern-leather-detail2-1200_2048x.jpg?v=1687202279" width="200" height="100" alt="image"/>
      <h3>Title: physics</h3>
      <h4>Price: 453/-</h4>
      <button onClick={handleClick}>Add To Cart</button>
    </div>
  )
}

export default Book
