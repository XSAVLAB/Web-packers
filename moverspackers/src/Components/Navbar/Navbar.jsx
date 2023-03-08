import React, { useState } from "react";
import "./navbar.css";
import { TbTruckDelivery } from "react-icons/tb";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

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
          <a href="#" className="logo flex">
            <h1>
              <TbTruckDelivery className="icon" />
              Movers & Packers
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Services
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                About us
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Pages
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Contacts
              </a>
            </li>

            <button className="btn">
              <a href="#">Book Now</a>
            </button>
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
