import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Hoc = (NewComponant) => {
  const HocFun = () => {
    const [user, setUser] = useState([]);
    const [loader, setLoader] = useState(false);
    // fetching api
    const Fatchapi = (input) => {
      fetch(`https://api.github.com/users/${input}`)
        .then((res) => res.json())
        .then((val) => setUser(val))
        .catch((err) => console.log(err));
    };
    return (
      <>
        <NewComponant
          Fetchchapi={Fatchapi}
          user={{ user, setUser }}
          loader={{ loader, setLoader }}
        >
          {" "}
        </NewComponant>
        {/* loader */}
        { loader && user.length===0 ? (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          ""
        )}
      </>
    );
  };
  return HocFun;
};
export default Hoc;
