import React, { useState } from 'react'

export default function Cart({listitems}) {
  console.log(listitems)
  let a = 0;
  listitems.map((item)=>(
    a = item.price+a
  ))
  

  return (
    <div className="cart">
        <div className="cartHead">Cart</div>
    
 
          {
            listitems.map((item) =>
            (
        <div className="cartData" key={item}>
          <div><img src={item.img} alt="" srcset="" /></div>
          <div>
              <div className="cartItems">
              {item.type}
              </div>
              <div className="cartPrice">
                 Price : {item.price}
              </div>
              <div className="cartSize">
                 Size : {item.size}
              </div>
              <div className="cartColor">
                 Color : {item.color}
              </div>
              <div className="remove">remove</div>
              </div>
        </div>
            ))
          }


        <div className="cartPay" onClick={()=>(alert('Your oder is placed of $'+a))}>
           Pay ${
            a
          }
        </div>
    </div>
 
  )
}
