import React,{useState}  from "react";

function Item({ name, category }) {

  const [inCart, setCart] = useState(false)

  const addItemToCart = ()=>{
    setCart(true);
    
  }

  return (
    <li className={inCart ? 'in-cart': ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addItemToCart} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;






















































// import React, {useState} from "react";



// function Item({ name, category }) {
//   const [isInCart, setIsInCart] = useState(false)
//   const classItem = isInCart ? "in-cart" : ""
//   const classRemove = isInCart ? "in-cart" : "out-cart"

//   function handleCartClick(){
//     setIsInCart ((isInCart => !isInCart))
//   }

//   return (
//     <li className={classItem}>
//       <span>{name}</span>
//       <span className="category">{category}</span>
//       <button className="add"  onClick={handleCartClick}>Add to Cart</button>
//     </li>
//   );
// }

// export default Item;
