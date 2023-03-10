import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { dataContaxt } from "../App";
export const Login = () => {
  // ref for input box
  const PasswordRef = useRef();
  const userNameRef = useRef();
  // using useNavigate for redirecting to dashboard page
  const navigate = useNavigate();
  // msg state for sowing validation
  const [msg, setMsg] = useState("");
  const userData = useContext(dataContaxt);
  useEffect(() => {
    // setting a particular user for dashboard
    let temp = [];
    var obj = {
      userName: "cedcoss_official",
      password: "cedcoss@123",
    };
    temp.push(obj);
    userData.setUser(temp);
  }, []);
  // login button function
  const LoginHandler = () => {
    //input box validation
    if (userNameRef.current.value === "") {
      setMsg("PLease enter your userName");
    } else if (PasswordRef.current.value === "") {
      setMsg("PLese enter your password");
    } else {
      // user validation
      userData.user.forEach((element) => {
        if (
          element.userName === userNameRef.current.value &&
          element.password === PasswordRef.current.value
        ) {
          // if valid then redirect to dashboard page
          navigate("/Dashboard");
          localStorage.setItem("CurrentUser", JSON.stringify(userData.user));
        } else if (
          element.userName !== userNameRef.current.value &&
          element.password !== PasswordRef.current.value
        ) {
          setMsg("credential Not matched!");
        }
      });
    }
  };
  // close button for validatin msg
  const closeHandler = () => {
    setMsg("");
  };
  return (
    <div className="Login_container">
      <h2>Login form</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter your Username"
          aria-label="userName"
          aria-describedby="basic-addon1"
          ref={userNameRef}
        />
      </div>
      <div className="input-group mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="Enter Password"
          aria-label="password"
          aria-describedby="basic-addon1"
          ref={PasswordRef}
        />
      </div>
      <div className="d-grid gap-2">
        <button className="btn btn-info" type="button" onClick={LoginHandler}>
          Login
        </button>
      </div>
      {/* conditional rendering */}
      {msg === "" ? (
        ""
      ) : (
        <div
          className="alert alert-warning alert-dismissible fade show mt-3"
          role="alert"
        >
          {msg}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={closeHandler}
          ></button>
        </div>
      )}
      <div className="mt-3">
        <br />
        Username:cedcoss_official
        <br />
        password:cedcoss@123
      </div>
    </div>
  );
};
