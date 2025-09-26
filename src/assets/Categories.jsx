import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Categories() {
  const categories = [
    "Gaming", "Sport Equip", "Kitchen", "Robot Cleaner", "Mobiles",
    "Office", "Cameras", "Computers", "Televisions", "Audios"
  ];

  return (
    <div className="container">
      {/* Categories Section */}
      <Container className="my-4 p-3">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="mb-0">Popular Categories</h4>
          <a href="#" className="text-muted text-decoration-none">View All</a>
        </div>

        <div className="d-flex justify-content-between flex-wrap">
          {categories.map((name, index) => (
            <div
              className="text-center"
              key={index}
              style={{ flex: "1", minWidth: "80px", maxWidth: "90px" }}
            >
              <div
                className="category-circle d-flex align-items-center justify-content-center bg-light rounded-circle mx-auto"
                style={{ width: "70px", height: "70px" }}
              >
                <img
                  src="./images/category.png"
                  alt={name}
                  width="40"
                  height="40"
                  className="img-fluid"
                />
              </div>
              <p className="category-label mt-2 mb-0 text-dark" style={{ fontWeight: "600", fontSize: "12px" }}>
                {name}
              </p>
            </div>
          ))}
        </div>
      </Container>

      {/* Cards Section */}
      <Container className="my-4">
        <Row className="g-3">
          {/* Big Left Card */}
          <Col lg={8}>
            <div
              className="p-4 text-white rounded h-100 d-flex flex-column justify-content-end"
              style={{
                backgroundImage: "url('./images/img2.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "480px",
              }}
            >
            </div>
          </Col>

          {/* Tall Right Card */}
          <Col lg={4}>
            <div
              className="p-4 text-white rounded h-100 d-flex flex-column justify-content-end align-items-center"
              style={{
                backgroundImage: "url('./images/img3.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "450px",
                borderRadius: "20px",
              }}
            >
              <Button className="btn btn-light rounded-pill">Discover Now</Button>
            </div>
          </Col>
        </Row>

        <Row className="g-3 mt-3">
          {/* Left Medium Card */}
          <Col md={6}>
            <div
  className="p-4 text-white rounded d-flex flex-column justify-content-end"
  style={{
    backgroundImage: "url('./images/img5.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "230px",
    borderRadius: "20px",
  }}
>
  <Button
    className="btn btn-dark btn-sm rounded-pill"
    style={{ width: "fit-content", alignSelf: "flex-start" }}
  >
    Shop Now
  </Button>
</div>
          </Col>

          {/* Middle Small Card */}
          <Col md={3}>
            <div
              className="p-4 rounded d-flex justify-content-center align-items-center"
              style={{
                backgroundImage: "url('./images/img4.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "230px",
                borderRadius: "20px",
              }}
            ></div>
          </Col>

          {/* Right Wide Card */}
          <Col md={3}>
            <div
              className="p-4 text-white rounded d-flex flex-column justify-content-end"
              style={{
                backgroundImage: "url('./images/img1.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "230px",
                borderRadius: "20px",
              }}
            >
              <h5>Washing Machine</h5>
              <p>Anatico Max 2</p>
              <Button className="btn btn-sm btn-light rounded-pill">Shop Now</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Categories;
