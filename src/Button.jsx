import React, { useState, useEffect } from "react";
import "./ProductList.css";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { addItem } from "./CartSlice";

function Button({ Ob }) {
  const [status, setStatus] = useState(false);
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    setStatus(cart.find((item) => item.name === Ob.name));
  }, [cart, Ob.name]);

  return (
    <>
      <button
        disabled={status}
        onClick={() => dispatch(addItem(Ob)) && toggleButton(Ob)}
        className={`product-button ${status ? "added-to-cart" : ""}`}
      >
        {status ? "Added" : "Add to cart"}
      </button>
    </>
  );
}

export default Button;
