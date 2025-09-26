import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="mt-4 pt-5">
      <Container>
        <Row>
          <Col xs={12} md={3} className="mb-4">
            <h6 className="fw-bold mb-3">Swoo - Online Electronic Market</h6>
            <p className="m-0 text-muted">HOTLINE 24/7</p>
            <h6 className="mb-3 text-primary">(025) 3686 25 16</h6>
            <p className="small mb-1 text-muted">257 Thatcher Road St, Brooklyn, Manhattan, NY 10002</p>
            <p className="small mb-3 text-muted">contact@swooelectro.com</p>
            <div className="d-flex gap-3">
              <a href="#"><i className="fab fa-facebook-f text-dark"></i></a>
              <a href="#"><i className="fab fa-twitter text-dark"></i></a>
              <a href="#"><i className="fab fa-instagram text-dark"></i></a>
              <a href="#"><i className="fab fa-youtube text-dark"></i></a>
            </div>
          </Col>

          <Col xs={6} md={2} className="mb-4">
            <h6 className="fw-bold mb-3">Top Categories</h6>
            <ul className="list-unstyled text-muted small">
              <li>TV/Televisions</li>
              <li>Computers</li>
              <li>Laptops</li>
              <li>Mobiles & Tablets</li>
              <li>Audios</li>
              <li>Cameras</li>
              <li>Gadget</li>
              <li>Sport Equipments</li>
              <li>Office</li>
              <li>Smart Home</li>
            </ul>
          </Col>

          <Col xs={6} md={2} className="mb-4">
            <h6 className="fw-bold mb-3">Company</h6>
            <ul className="list-unstyled text-muted small">
              <li>About Swoo</li>
              <li>Contact</li>
              <li>Career</li>
              <li>Blog</li>
              <li>Sitemap</li>
              <li>Store Locations</li>
            </ul>
          </Col>

          <Col xs={6} md={2} className="mb-4">
            <h6 className="fw-bold mb-3">Help Center</h6>
            <ul className="list-unstyled text-muted small">
              <li>Customer Service</li>
              <li>Policy</li>
              <li>Terms & Conditions</li>
              <li>Track Order</li>
              <li>FAQs</li>
              <li>My Account</li>
              <li>Product Support</li>
            </ul>
          </Col>

          <Col xs={6} md={2} className="mb-4">
            <h6 className="fw-bold mb-3">Partner</h6>
            <ul className="list-unstyled text-muted small">
              <li>Become Seller</li>
              <li>Affiliate</li>
              <li>Advertise</li>
              <li>Partnership</li>
            </ul>
          </Col>
        </Row>

        {/* Bottom Bar */}
        <div className="bg-light border-top py-3 mt-4">
          <Container className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
            <p className="mb-2 mb-md-0 small text-muted">© 2024 <strong>Swoonet3.</strong> All Rights Reserved</p>
            <div className="d-flex gap-3 align-items-center">
              <img src="/images/stripe.png" alt="Stripe" style={{ height: "19px", width: "17px" }} />
              <img src="/images/stripe2.png" alt="Paypal" style={{ height: "18px", width: "46px" }} />
              <img src="/images/credit.png" alt="Mastercard" style={{ height: "19px", width: "35px" }} />
              <img src="/images/clarna.png" alt="Klarna" style={{ height: "13px", width: "63px" }} />
              <img src="/images/visa.png" alt="Visa" style={{ height: "17px", width: "46px" }} />
            </div>
            <div className="d-flex gap-3 small">
              <span>USD ▾</span>
              <span><img src="./images/america.png" alt="" />Eng ▾</span>
            </div>
          </Container>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
