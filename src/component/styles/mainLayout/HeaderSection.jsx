import React, { useState } from "react";
import { Container, Navbar, NavbarToggler } from "reactstrap";
import { Link } from "react-router-dom";

const HeaderSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <header>
      <Container fluid className="px-0">
        <div className="items-align-center">
          <Navbar expand="md" className="navbar-dark bg-black  px-4 ">
            <Link to="/" className="navbar-brand mx-auto">
              <img src="../images/fav.ico" alt="logo" width="32" />
            </Link>
            <NavbarToggler onClick={toggle} />
          </Navbar>
        </div>
      </Container>
    </header>
  );
};

export default HeaderSection;
