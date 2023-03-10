import React from "react";
import { Link } from "react-router-dom";
export const Landing = () => {
  return (
    <div className="landing">
      <Link to={"/task1Login"} className="landing__link">
        1. Authentication
      </Link>
      <br /><hr />
      <Link to={"/Products"} className="landing__link">2. Shopping cart</Link>
      <br /><hr />
      <Link to={"/Filter"} className="landing__link">3. Filter data items</Link>
      <br /><hr />
      <Link to={"/Debounce"} className="landing__link">
        4 and 5. Debounce functionality and Loader during api call
      </Link>
    </div>
  );
};
