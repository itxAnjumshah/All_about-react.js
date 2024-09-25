import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NewsComponents from "./newscomponets";
import { Container, NavDropdown } from "react-bootstrap";

export default function Navbarbut() {
  const [category, setCategory] = useState("business");

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <>
      <Navbar expand="lg" className="bg-secondary text-white">
        <Container>
          <Navbar.Brand className="text-light fs-3" href="./business">
            News-monkey
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                className="text-light"
                onClick={() => handleCategoryChange("business")}
              >
                Business
              </Nav.Link>
              <Nav.Link
                className="text-light"
                onClick={() => handleCategoryChange("entertainment")}
              >
                Entertainment
              </Nav.Link>
              <Nav.Link
                className="text-light"
                onClick={() => handleCategoryChange("general")}
              >
                General
              </Nav.Link>
              <Nav.Link
                className="text-light"
                onClick={() => handleCategoryChange("health")}
              >
                Health
              </Nav.Link>
              <Nav.Link
                className="text-light"
                onClick={() => handleCategoryChange("science")}
              >
                Science
              </Nav.Link>
              <Nav.Link
                className="text-light"
                onClick={() => handleCategoryChange("sports")}
              >
                Sports
              </Nav.Link>
              <Nav.Link
                className="text-light"
                onClick={() => handleCategoryChange("technology")}
              >
                Technology
              </Nav.Link>
              <Nav.Link className='text-light' onClick={() => handleCategoryChange("film")}>films</Nav.Link>
              <Nav.Link className='text-light' onClick={() => handleCategoryChange("Electronic")}>Electronic</Nav.Link>

              <Nav.Link
                className="text-light"
                onClick={() => handleCategoryChange("Jobs")}
              >
                Jobs
              </Nav.Link>

              <NavDropdown title="Films" id="basic-nav-dropdown  ">
                <NavDropdown.Item
                  onClick={() => handleCategoryChange("films")}
                >
                  All films
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleCategoryChange("use-films")}
                >
                  usa-films
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleCategoryChange("bollywood")}
                >
                  indian films
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <NewsComponents category={category} />
    </>
  );
}

