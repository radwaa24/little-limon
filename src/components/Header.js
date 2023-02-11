import logo from "./images/Header/Logo.svg"
import  { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "./style/header.css";
import useScroll from "./hooks/useScroll";

export function Header (props)  {
  const [isOpen, setIsOpen] = useState(false);
  const Scrolling = useScroll();
  const handleHamburger = () => {
    setIsOpen(!isOpen);
  };
  const handleClick = (a) => () => {
    const element = document.getElementById(a);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      console.log(a);
    }

    handleHamburger();
  };
  return (
    <div
      id="Home"
      className={`Header ${Scrolling === "down" ? "" : "scroll"} ${
        isOpen ? "open" : ""
      }`}>
      <NavLink
        to="/"
        aria-label="logo to Home"
        onClick={() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          handleHamburger();
        }}>
        <img src={logo} className={isOpen ? "open" : ""} alt="logo" />
      </NavLink>
      <button
        className={`hamburger-menu ${isOpen ? "open" : ""}`}
        onClick={handleHamburger}
        aria-label="menu">
        <span className={isOpen ? "bar_close_1" : "bar"}></span>
        <span className={isOpen ? "bar_close_2" : "bar"}></span>
        <span className={isOpen ? "bar_close_3" : "bar"}></span>
      </button>
      <nav className={`nav ${isOpen ? "open" : ""}`}>
        {props.home ? (
          <NavLink
            to="/"
            aria-label={props.home}
            onClick={() => {
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
              handleHamburger();
            }}>
            {props.home}
          </NavLink>
        ) : (
          <Link
            to="/"
            onClick={() => {
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
              handleHamburger();
            }}>
            Home
          </Link>
        )}

        {props.name ? (
          <NavLink
            to={`/#${props.name}`}
            aria-label={props.name}
            onClick={handleClick(props.name)}>
            {props.name}
          </NavLink>
        ) : (
          ""
        )}
        <Link
          to="/Menu"
          aria-label="Menu"
          onClick={() => {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
            handleHamburger();
          }}>
          Menu
        </Link>
        <Link
          to="/Reservation"
          aria-label="Reservation"
          onClick={() => {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
            handleHamburger();
          }}>
          Reservation
        </Link>
        <Link
          to="/Order"
          aria-label="Order"
          onClick={() => {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
            handleHamburger();
          }}>
          Order Online
        </Link>
        <Link
          to="/Login"
          aria-label="Login"
          onClick={() => {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
            handleHamburger();
          }}>
          Login
        </Link>
      </nav>
    </div>
  );
};
