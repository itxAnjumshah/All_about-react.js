import React, { useState } from "react";
import { Link, Events, scrollSpy } from "react-scroll"; // Updated import
import "./Navstyle.css";
import logo from "../Assets/logo-png.png";

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (item) => {
    setActiveItem(item);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Scroll event to update active item on scroll
  const handleSetActive = (item) => {
    setActiveItem(item);
  };

  // Bind scroll events
  React.useEffect(() => {
    Events.scrollEvent.register("begin", function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function () {
      console.log("end", arguments);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <div className="nav-fixed">
      <div className="navbar">
        <div className="name">
          <img src={logo} alt="Logo" />
          <p>ANJUM SHAH</p>
        </div>
        <ul className={isOpen ? "menu open" : "menu"}>
          <li
            className={activeItem === "Home" ? "active" : ""}
            onClick={() => handleClick("Home")}
          >
            <Link
              to="home"
              smooth={true}
              duration={500}
              spy={true} // Track active link
              onSetActive={() => handleSetActive("Home")}
            >
              Home
            </Link>
          </li>
          <li
            className={activeItem === "About" ? "active" : ""}
            onClick={() => handleClick("About")}
          >
            <Link
              to="about"
              smooth={true}
              duration={500}
              spy={true} // Track active link
              onSetActive={() => handleSetActive("About")}
            >
              About
            </Link>
          </li>
          <li
            className={activeItem === "My-Services" ? "active" : ""}
            onClick={() => handleClick("My-Services")}
          >
            <Link
              to="myservices"
              smooth={true}
              duration={500}
              spy={true} // Track active link
              onSetActive={() => handleSetActive("My-Services")}
            >
              My Services
            </Link>
          </li>
          <li
            className={activeItem === "Contact-us" ? "active" : ""}
            onClick={() => handleClick("Contact-us")}
          >
            <Link to="contact" smooth={true} duration={500} spy={true} onSetActive={() => handleSetActive("Contact-us")}>Contact Us</Link>

          </li>
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
      </div>
    </div>
  );
}
