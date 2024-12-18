import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./MainLayout.css";

function MainLayout() {
  return (
    <div>
      <h2>Welcome to the home page</h2>
      <nav>
        <ul className="aa">
          <li>
            <Link to="/Login">LOGIN </Link>
          </li>
          <li>
            <Link to="/Registration">REGISTRATION</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default MainLayout;
