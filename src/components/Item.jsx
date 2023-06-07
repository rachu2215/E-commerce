import { useState } from "react"

export default function Item(props) {
    
    const itemsData = props.addtocart
    const [count,setCount] = useState([])
    

  return (

 <>
 
    <div className="item">
        <div className="itemImg" style={{backgroundImage:"url("+props.img+")"}}></div>
        <div className="itemData">
            <div className="itemHead"> <span>{props.type}</span></div>
            <div className="itemBrand"><span>Brand:{props.brand} </span> </div>
            <div className="itemSize"><span>Size:{props.size} </span> </div>
            <div className="itemColor"><span>Color: {props.color}</span></div>
            <div className="itemPrice"><span>Price: {props.price}</span></div>
            <div className="addCart"><span onClick = {()=>itemsData(props)}>Add to cart </span></div>
        </div>
    </div>
 </>
  )
}


// (event)=>addtocart(event,type,brand,size,color,price)