import React, { useContext, useEffect, useState } from "react";
import { dataContaxt } from "../App";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
export const Cart = () => {
  // using context for product data
  const productData = useContext(dataContaxt);
  const [Price, setPrice] = useState();
  const [Emptymsg, setEmptyMsg] = useState({ display: "none" });
  const [Display, setDisplay] = useState();
  // Here i am using useNavigate for redirect to other page
  const navigate = useNavigate();
  // Here i am checking that the user ois loged in or not
  // increase Button Functionaliy
  const IncreaseHandler = (val) => {
    for (let i = 0; i < productData.cartArr.length; i++) {
      if (val === productData.cartArr[i].id) {
        productData.cartArr[i].quantity += 1;
        productData.setCartArr([...productData.cartArr]);
      }
    }
  };
  // decrese button functinality
  const DecreseHandler = (val) => {
    for (let i = 0; i < productData.cartArr.length; i++) {
      if (val === productData.cartArr[i].id) {
        if (productData.cartArr[i].quantity <= 1) {
          alert("Warning ! your product will delete from cart");
          productData.cartArr.splice(i, 1);
          productData.setCartArr([...productData.cartArr]);
        } else {
          productData.cartArr[i].quantity -= 1;
          productData.setCartArr([...productData.cartArr]);
        }
      }
    }
  };
  // Adding Price here
  let totalprice = 0;
  useEffect(() => {
    for (let i = 0; i < productData.cartArr.length; i++) {
      totalprice +=
        productData.cartArr[i].quantity * productData.cartArr[i].price;
      setPrice(totalprice);
    }
    if (productData.cartArr.length === 0) {
      setDisplay({ display: "none" });
      setEmptyMsg({ display: "block" });
    }
  }, [productData.cartArr]);

  //  Back to main page
  const BackHAndler = () => {
    navigate("/Products");
  };
  return (
    <div className="Cart">
      <div className="flex">
        <button
          onClick={BackHAndler}
          className="btn btn-warning"
          style={{ float: "left" }}
        >
          Back
        </button>
      </div>
      <p className="EmptyCartPara" style={Emptymsg}>
        Your CART is empty
      </p>
      <div style={Display} className="cartDiv">
        <div className="ProductDetail">
          {productData.cartArr.map((item) => (
            <div className="CartDivDeatail" key={item.id}>
              <div className="Width">
                <img className="CartImgDiv " src={item.image} alt="" />
              </div>{" "}
              <div className="ProductNameDiv Width">
                {" "}
                <p>{item.name}</p> <p>${item.price}</p>
              </div>{" "}
              <div className="quantityButtonDiv">
                <button
                  className="Quantitybutton"
                  onClick={() => IncreaseHandler(item.id)}
                >
                  +
                </button>
                <b style={{ marginLeft: "2px" }}>{item.quantity}</b>
                <button
                  className="Quantitybutton"
                  onClick={() => DecreseHandler(item.id)}
                >
                  -
                </button>{" "}
              </div>
            </div>
          ))}
        </div>
        <p style={Display} className="TotalPrice">
          Total: ₹{Price}
        </p>{" "}
        <br />
        <br />
      </div>
    </div>
  );
};
