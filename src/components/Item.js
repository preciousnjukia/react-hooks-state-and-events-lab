import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  function toggleCartStatus() {
    setInCart(!inCart);
  };

  const buttonText = inCart ? "Remove From Cart" : "Add to Cart";

  const liClassName = inCart ? "in-cart" : "" ;

  return (
    <li className={liClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleCartStatus}>{buttonText}</button>
    </li>
  );
}

export default Item;
