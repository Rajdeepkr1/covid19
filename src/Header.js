import React from "react";
import "./header.css";
import { Button, Nav, Navbar, Form, FormControl, Card } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <div className="header">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              width={64}
              height={64}
              className="mr-3"
              src="https://upload.wikimedia.org/wikipedia/commons/8/82/SARS-CoV-2_without_background.png"
              alt="Generic placeholder"
            />
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Distric</Nav.Link>
            <Nav.Link href="#features">State</Nav.Link>
            <Nav.Link href="#pricing">Country</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search_in_India"
              className="mr-sm-2"
            />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
