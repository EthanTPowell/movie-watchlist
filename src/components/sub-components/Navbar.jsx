import React from "react";
import { Link, Navigate } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="navBar container">
        <nav className="nav">
          <div>
            <Link to={"/"}>Home</Link>
          </div>
          <div>
            <Link to={"/favorites"}>Favorites List</Link>
          </div>
        </nav>
      </div>
    </>
  );
}
