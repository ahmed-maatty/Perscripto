import React from "react";
import logo from "/assets/logo.png";

function NavBar() {
  return (
    <nav className="flex justify-between items-center sticky top-0 py-4 px-6">
      <div className="nav_logo flex justify-center items-center gap-2">
        <img src={logo} alt="" />
        <h1 className="">Prescripto</h1>
      </div>
      <div>nav</div>
      <div>auth</div>
    </nav>
  );
}

export default NavBar;
