import React, { useState } from "react";
import "./navbar.css";
import { TbTruckDelivery } from "react-icons/tb";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("navBar");
  //Function to toggle navbar

  const showNav = () => {
    setActive("navBar activeNavbar");
  };
  //Function to remove navbar
  const removeNavbar = () => {
    setActive("navBar ");
  };

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <NavLink to="#" className="logo flex">
            <h1>
              <TbTruckDelivery className="icon" />
              Welcome Packers & Movers
            </h1>
          </NavLink>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <NavLink to="/" className="navLink">Home</NavLink>
            </li>
            <li className="navItem">
              <NavLink to="/service" className="navLink">Service</NavLink>
            </li>
            <li className="navItem">
              <NavLink to="/aboutUs" className="navLink">About us</NavLink>
            </li>
            {/* <Switch>
              <Route> */}
            <li className="navItem">
              <NavLink to="/pages" className="navLink">Pages</NavLink>
            </li>
            {/* </Route>
            </Switch> */}
            <li className="navItem">
              <NavLink to="/contacts" className="navLink">Contacts</NavLink>
            </li>

            {/* <button className="btn">
              <a to="#">Book Now</a>
            </button> */}
          </ul>

          <div onClick={removeNavbar} className="closeNavbar">
            <AiFillCloseCircle className="icons" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
