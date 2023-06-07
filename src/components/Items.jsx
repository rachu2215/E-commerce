import React from 'react'
import Item from './Item'

export default function Items({addtocart}) {
    const data1 = {type:'Shoe', brand:'Nike', color:'white',price:300,size:'XL',img:'https://www.pngall.com/wp-content/uploads/13/Nike-Shoes-Air-Max-PNG-Images.png'};
    const data2 = {type:'Tshirt', brand:'Addidas', color:'white',price:400,size:'XL',img:'https://w7.pngwing.com/pngs/482/519/png-transparent-t-shirt-adidas-stan-smith-adidas-originals-trefoil-adidas-t-shirt-tshirt-white-logo.png'};
    return (
        <div className="items">
        <div>Items</div>
        <Item  img = {data1.img} addtocart= {addtocart} type={data1.type} brand = {data1.brand} color = {data1.color} price = {data1.price} size = {data1.size}/>
        <Item  img = {data2.img} addtocart = {addtocart} type={data2.type} brand = {data2.brand} color = {data2.color} price = {data2.price} size = {data2.size}/>
        <Item  img = {data1.img} addtocart= {addtocart} type={data1.type} brand = {data1.brand} color = {data1.color} price = {data1.price} size = {data1.size}/>
       
        
    </div>
  )
}
