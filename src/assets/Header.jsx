import React from "react";
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
      <Navbar bg="white" expand="lg" className="border-bottom py-3">
        <Container>
          {/* Logo */}
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <div>
              <img src="./images/logo.png" alt="" style={{height:"40px",width:"150px"}}/>
            </div>
           
          </Navbar.Brand>

          {/* Small Search Bar with Rounded Category Selector */}
          <Form className="d-flex flex-grow-1 mx-3">
            <InputGroup className="input-group-sm">
              {/* Rounded Category Select */}
              <Form.Select
                className="form-select-sm rounded-start border border-end-0"
                style={{ maxWidth: "130px" }}
              >
                <option>All Categories</option>
                <option>Mobiles</option>
                <option>Computers</option>
                <option>Appliances</option>
              </Form.Select>

              {/* Small Search Input */}
              <FormControl
                type="search"
                placeholder="Search anything..."
                className="form-control-sm"
              />

              {/* Small Search Button */}
              <Button variant="primary" size="sm" className="rounded-end">
                <i className="fa fa-search"></i>
              </Button>
            </InputGroup>
          </Form>

          {/* Hotline + Icons */}
          <div className="d-flex align-items-center gap-4">
            <div>
              <div className="small">Hotline 24/7</div>
              <div
                className="fw-bold text-primary"
                style={{ color: "#4B3EC4" }}
              >
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
        </Container>
      </Navbar>

      {/* Bottom Menu */}
      <div className="border-top py-2">
        <Container className="d-flex justify-content-between align-items-center">
          {/* LEFT SIDE: Demos, Pages, Products, Contact */}
          <div className="d-flex gap-4 align-items-center">
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
          </div>

          {/* RIGHT SIDE: Sell on Swoo, Order Tracking, Recently Viewed, USD, Eng */}
          <div className="d-flex gap-3 align-items-center">
            <Nav.Link
              href="#"
              className="link-dark d-flex align-items-center gap-1"
            >
              Sell on Swoo
            </Nav.Link>

            <Nav.Link
              href="#"
              className="link-dark d-flex align-items-center gap-1"
            >
              Order Tracking
            </Nav.Link>

            <NavDropdown title="Recently Viewed" id="nav-viewed">
              <NavDropdown.Item href="#">Viewed Item</NavDropdown.Item>
            </NavDropdown>

            {/* USD Dropdown with border at the end */}
            <NavDropdown
              title="USD"
              id="nav-usd"
              className="border-end"
              style={{ paddingRight: "8px", marginRight: "8px" }}
            >
              <NavDropdown.Item href="#">EUR</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title={
                <span>
                  <img src="./images/america.png" alt="" /> Eng
                </span>
              }
              id="nav-eng"
            >
              <NavDropdown.Item href="#">Spa</NavDropdown.Item>
            </NavDropdown>
          </div>
        </Container>
      </div>
    </header>
  );
}

export default Header;
