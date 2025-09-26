import React from "react";
import logo from "../assets/images/logo.png";
import america from "../assets/images/america.png";

import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  NavDropdown,
  Button,
  InputGroup,
} from "react-bootstrap";

function Header() {
  return (
    <header>
      {/* Top Navbar */}
      <Navbar
        bg="white"
        expand="lg"
        className="border-bottom py-3"
        collapseOnSelect
      >
        <Container>
          {/* Logo */}
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <img src={logo} alt="Logo" style={{ height: "40px", width: "150px" }} />
          </Navbar.Brand>

          {/* Mobile Toggle */}
          <Navbar.Toggle aria-controls="top-navbar" />

          <Navbar.Collapse id="top-navbar" className="justify-content-between">
            {/* Search Bar */}
            <Form className="d-flex flex-grow-1 mx-3 my-2 my-lg-0">
              <InputGroup className="input-group-sm w-100">
                <Form.Select
                  className="form-select-sm rounded-start border border-end-0"
                  style={{ maxWidth: "130px" }}
                >
                  <option>All Categories</option>
                  <option>Mobiles</option>
                  <option>Computers</option>
                  <option>Appliances</option>
                </Form.Select>

                <FormControl
                  type="search"
                  placeholder="Search anything..."
                  className="form-control-sm"
                />

                <Button
                  variant=""
                  style={{ backgroundColor: "#4B3EC4", color: "white" }}
                  size="sm"
                  className="rounded-end"
                >
                  <i className="fa fa-search light"></i>
                </Button>
              </InputGroup>
            </Form>

            {/* Hotline + Icons (Hidden on small screens) */}
            <div className="d-none d-lg-flex align-items-center gap-4">
              <div>
                <div className="small">Hotline 24/7</div>
                <div className="fw-bold" style={{ color: "#4B3EC4" }}>
                  (025) 3686 25 16
                </div>
              </div>
              <div className="fs-5 d-flex gap-3 align-items-center">
                <i className="fa-regular fa-heart"></i>
                <span
                  className="d-flex align-items-center justify-content-center rounded-circle text-white"
                  style={{
                    width: "25px",
                    height: "25px",
                    background: "#4B3EC4",
                  }}
                >
                  2
                </span>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Bottom Menu */}
      <Navbar bg="white" expand="lg" className="border-top py-2">
        <Container>
          <Navbar.Toggle aria-controls="bottom-navbar" />
          <Navbar.Collapse id="bottom-navbar" className="justify-content-between">
            {/* Left Menu */}
            <Nav className="d-flex gap-3 align-items-center flex-wrap">
              <NavDropdown title="Demos" id="nav-demos">
                <NavDropdown.Item href="#">Demo Link</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Pages" id="nav-pages">
                <NavDropdown.Item href="#">Page Link</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Products" id="nav-products">
                <NavDropdown.Item href="#">Product Link</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#" className="link-dark">
                Contact
              </Nav.Link>
            </Nav>

            {/* Right Menu */}
            <Nav className="d-flex gap-3 align-items-center flex-wrap mt-2 mt-lg-0">
              <Nav.Link href="#" className="link-dark d-flex align-items-center gap-1">
                Sell on Swoo
              </Nav.Link>

              <Nav.Link href="#" className="link-dark d-flex align-items-center gap-1">
                Order Tracking
              </Nav.Link>

              <NavDropdown title="Recently Viewed" id="nav-viewed">
                <NavDropdown.Item href="#">Viewed Item</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="USD"
                id="nav-usd"
                className="border-end pe-2 me-2"
              >
                <NavDropdown.Item href="#">EUR</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title={
                  <span className="d-flex align-items-center gap-1">
                    <img src={america} alt="USA" style={{ width: "20px" }} /> Eng
                  </span>
                }
                id="nav-eng"
              >
                <NavDropdown.Item href="#">Spa</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
