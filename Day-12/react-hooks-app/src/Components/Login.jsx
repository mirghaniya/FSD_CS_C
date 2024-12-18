import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ regDataLogin }) {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function verification(e) {
    e.preventDefault();
    if (regDataLogin.email === email && regDataLogin.pwd === pwd) {
      alert("We have made it");
      navigate("/dash");
    } else {
      setError("Sorry, wrong credentials");
    }
  }

  return (
    <div>
      <h2>Welcome to Login Page</h2>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            onChange={(e) => setPwd(e.target.value)}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            placeholder="Password"
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button
          onClick={verification}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
