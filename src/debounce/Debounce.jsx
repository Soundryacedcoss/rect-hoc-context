import React, { useEffect, useState } from "react";
import Hoc from "./Hoc";
import "./Debounce.css";
const Debounce = ({ Fetchchapi, user, setUser, loader }) => {
  const [input, setInput] = useState("");
  useEffect(() => {
    // fetching data using debounce
    const fetchData = setTimeout(() => {
      if (input !== "") {
        Fetchchapi(input);
        loader.setLoader(false);
      }
    }, 2000);
    return () => clearInterval(fetchData);
  }, [input]);
  // serach Handler
  const SearhHanlder = (e) => {
    setInput(e.target.value);
    loader.setLoader(true);
    let temp = [];
    if (e.target.value === "") {
      user.setUser(temp);
      loader.setLoader(false);
    }
  };
  return (
    <>
      <h2>Debounce</h2>
      <h3>Search your github username</h3>
      <div className="debounce">
        <div
          className="input-group w-50"
          style={{ taxtAlign: "center", margin: "auto" }}
        >
          <input
            type="text"
            className="form-control w-25"
            placeholder="Search github username"
            aria-label="Username"
            aria-describedby="addon-wrapping"
            onChange={SearhHanlder}
          />
        </div>
      </div>
      {user.user.length !== 0 ? (
        <div className="contact mt-5">
          <div className="contact__detail">
            <div>
              <img
                className="contact__userimg"
                src={user.user.avatar_url}
                alt=""
              />
            </div>
            <div className="contact__description">
              <h2>{user.user.login}</h2>
              <span>
                Github link: <a href={user.user.html_url}>{user.user.url}</a>{" "}
              </span>
              <p>User Type:{user.user.type}</p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default Hoc(Debounce);
