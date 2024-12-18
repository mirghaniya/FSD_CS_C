import React from "react";

const Login = () => {
  return <div className="container">
  <div className="row">
    <div className="col-md-2"></div>
    <div className="col-md-8">
      <form>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
          />
        </div>
        <br />

        <button className="btn btn-primary">Register</button>
      </form>
    </div>
    <div className="col-md-2"></div>
  </div>
</div>
};

export default Login;
