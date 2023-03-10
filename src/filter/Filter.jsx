import React, { useContext, useEffect, useRef, useState } from "react";
import { dataContaxt } from "../App";
import "./Filter.css";
import fallback from "../Images/fallback.webp";
export const Filter = () => {
  // Using context for fetching context data
  const product = useContext(dataContaxt);
  const SearchRef = useRef();
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    // fetching Api
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((val) => {
        if (product.product.length === 0) {
          product.setProduct(val.products);
          product.setProductClone(val.products);
        } else {
          product.setProduct([...product.product]);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  // serching product item
  const SearchHandler = () => {
    let temp = [];
    product.productClone.forEach((element) => {
      let temp1 = SearchRef.current.value;
      let name = element.title.toLowerCase();
      if (SearchRef.current.value.length > 2) {
        if (name.startsWith(temp1)) {
          temp.push(element);
        } else {
          setFlag(true);
        }
        product.setProduct(temp);
      } else if (SearchRef.current.value.length === 0) {
        product.setProduct(product.productClone);
        setFlag(false);
      }
    });
  };
  return (
    <div>
      <header className="w-50" style={{ textAlign: "center", margin: "auto" }}>
        <h2> Search product</h2>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            placeholder="Searh item..."
            aria-describedby="inputGroup-sizing-default"
            onChange={SearchHandler}
            ref={SearchRef}
          />
        </div>
      </header>
      {product.product.length === 0 && !flag ? (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            textAlign: "center",
            margin: "auto",
            width: "90",
          }}
        >
          {product.product.map((val) => (
            <div
              className="Product_card"
              style={{ marginLeft: "8%" }}
              key={Math.random()}
            >
              <img src={val.thumbnail} alt="" className="Product_img" />
              <h3
                style={{
                  height: "20%",
                  marginBottom: "4%",
                  marginLeft: "4%",
                }}
              >
                {val.title}
              </h3>
              <div
                style={{
                  display: "flex",
                  columnGap: "20%",
                  height: "5%",
                  width: "100%",
                  marginLeft: "4%",
                }}
              >
                <p>STOCK:{val.stock}</p>
                <p style={{ align: "right", marginLeft: "30%" }}>
                  {val.rating}⭐
                </p>
              </div>
              <p style={{ marginLeft: "4%" }}>PRICE:₹{val.price}</p>
            </div>
          ))}
        </div>
      )}
      {flag && product.product.length === 0 ? (
        <img src={fallback} alt="" className="w-50" />
      ) : null}
    </div>
  );
};
