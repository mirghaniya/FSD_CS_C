import React from "react";
import "./MainLayout.css";
import { Link, Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default MainLayout;