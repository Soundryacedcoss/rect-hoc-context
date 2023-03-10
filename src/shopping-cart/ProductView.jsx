import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { dataContaxt } from "../App";
import productDetail from "./ProductDetail";
import "./ProductView.css";
const products = productDetail;
export const ProductView = () => {
  // using context
  const data = useContext(dataContaxt);
  // Add to cart  button functinality for adding the product to cart
  const AddToCart = (event) => {
    for (let i = 0; i < productDetail.length; i++) {
      if (event.target.value === productDetail[i].id) {
        if (productDetail[i].quantity < 1) {
          alert("Product added to cart");
          productDetail[i].quantity += 1;
          data.cartArr.push(productDetail[i]);
          data.setCartArr([...data.cartArr]);
        } else if (productDetail[i].quantity >= 1) {
          alert("Product added to cart");
          productDetail[i].quantity += 1;
          data.setCartArr([...data.cartArr]);
        }
      }
    }
  };
  return (
    <div>
      <div className="header">
        <header>
          <Link to={"/Cart"}>
            <button className="btn btn-warning">
              Cart {data.cartArr.length}
            </button>
          </Link>
        </header>
      </div>
      <div id="main">
        <div id="products">
          {products.map((item) => (
            <div className="product" key={item.id}>
              {" "}
              <div>
                {" "}
                <img
                  className="ProductImg"
                  src={item.image}
                  alt=""
                />{" "}
              </div>{" "}
              <p>
                {" "}
                <span className="title">{item.name}</span>{" "}
                <span>₹{item.price}</span> <br />
                <span>{item.rating}</span>
              </p>{" "}
              <button
                value={item.id}
                className="add-to-cart"
                onClick={AddToCart}
              >
                Add to CART
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
