import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Categories() {
  const categories = [
    "Gaming", "Sport Equip", "Kitchen", "Robot Cleaner", "Mobiles",
    "Office", "Cameras", "Computers", "Televisions", "Audios"
  ];

  return (
    <Container className="my-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap">
        <h4 className="mb-0">Popular Categories</h4>
        <a href="#" className="text-muted text-decoration-none">View All</a>
      </div>

      {/* Categories */}
      <Row className="g-3 justify-content-start">
        {categories.map((name, index) => (
          <Col key={index} xs={4} sm={3} md={2} className="text-center">
            <div className="category-circle d-flex align-items-center justify-content-center bg-light rounded-circle mx-auto"
              style={{ width: "70px", height: "70px" }}>
              <img src="./images/category.png" alt={name} className="img-fluid" style={{ width: "40px", height: "40px" }} />
            </div>
            <p className="mt-2 mb-0 text-dark fw-semibold" style={{ fontSize: "12px" }}>{name}</p>
          </Col>
        ))}
      </Row>

      {/* Cards Section */}
      <Row className="g-3 my-4">
        <Col lg={8} md={12}>
          <div className="p-4 text-white rounded h-100" style={{
            backgroundImage: "url('./images/img2.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "300px",
          }}></div>
        </Col>

        <Col lg={4} md={12}>
          <div className="p-4 text-white rounded h-100 d-flex flex-column justify-content-end align-items-center" style={{
            backgroundImage: "url('./images/img3.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "300px",
          }}>
            <Button className="btn btn-light rounded-pill">Discover Now</Button>
          </div>
        </Col>
      </Row>

      <Row className="g-3 mt-3">
        <Col md={6} xs={12}>
          <div className="p-4 text-white rounded d-flex flex-column justify-content-end" style={{
            backgroundImage: "url('./images/img5.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "230px",
          }}>
            <Button className="btn btn-dark btn-sm rounded-pill">Shop Now</Button>
          </div>
        </Col>

        <Col md={3} xs={6}>
          <div className="p-4 rounded d-flex justify-content-center align-items-center" style={{
            backgroundImage: "url('./images/img4.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "230px",
          }}></div>
        </Col>

        <Col md={3} xs={6}>
          <div className="p-4 text-white rounded d-flex flex-column justify-content-end" style={{
            backgroundImage: "url('./images/img1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "230px",
          }}>
            <h5>Washing Machine</h5>
            <p>Anatico Max 2</p>
            <Button className="btn btn-sm btn-light rounded-pill">Shop Now</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Categories;
