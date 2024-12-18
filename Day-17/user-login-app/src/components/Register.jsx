import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Register = ({ regLog }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const data = { name, email, password };
  const handleregister = (e) => {
    e.preventDefault();
    alert("Rehisteration Done");
    regLog(data);
  };
  return (
    <div className="container">
      {JSON.stringify(data)}
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <form>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="form-control"
                placeholder="Enter Name"
              />
            </div>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="form-control"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="form-control"
                placeholder="Password"
              />
            </div>
            <br />

            <button onClick={handleregister} className="btn btn-primary">
              Register
            </button>
          </form>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};

export default Register;