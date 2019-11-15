import React, { useState } from "react";
import { axiosWithAuth } from "./../utils/axiosWithAuth";
import axios from "axios";

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [credentials, setCredentials] = useState({
    username: 'Lambda School',
    password: 'i<3Lambd4'
  });

  const [loggedIn, setLoggedIn] = useState(false)

  const login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", credentials)
      .then(res => {
        console.log("res", res)
        localStorage.setItem("token", res.data.payload);
        if ("token" ? setLoggedIn(true) : null);
        return props.history.push("/bubble-page")
      })
      .catch(err => console.log(err.response))
  };

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  };


  return (
    <>
      {/* <h2>{loggedIn ? `Welcome back ${credentials.username}` : "Please log in"}</h2> */}
      <form onSubmit={login}>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button>Log in</button>
      </form>
    </>
  );
};

export default Login;
