import React, { useState } from 'react'
import Items from './Items'
import Cart from './Cart'
export default function Container(props) {
 const [cart,setCart] = useState([])
  const addtocart =(items)=>{
    setCart((prevCart) => [...prevCart, items]);
   
    console.log(cart)
}
    
  return (
    <>
    
      <div className='shp'>Shop</div>
    <div className="container">
      
        <Items addtocart ={addtocart}  />
        <Cart listitems = {cart} />
    </div>
    </>
  )
}
