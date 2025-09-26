import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const products = [
  { id: 1, title: "Air Purifier", price: "$489.00", oldPrice: "$619.00", img: "./images/mobile.png" },
  { id: 2, title: "Shark Robot Vacuum", price: "$325.00", oldPrice: "$428.00", img: "./images/mobile.png" },
  { id: 3, title: "Espresso Machine", price: "$489.00", oldPrice: "$619.00", img: "./images/mobile.png", big: true },
  { id: 4, title: "Smart TV", price: "$1,759.00", oldPrice: "$2,069.00", img: "./images/mobile.png" },
  { id: 5, title: "Camera", price: "$899.00", oldPrice: "$1,199.00", img: "./images/mobile.png" },
  { id: 6, title: "Fan", price: "$120.00", oldPrice: "$199.00", img: "./images/mobile.png" },
  { id: 7, title: "Microwav", price: "$250.00", oldPrice: "$310.00", img: "./images/mobile.png" },
];

const trendingSearch = [
  "Vacuum Robot", "Bluetooth Speaker", "Oled TV", "Security Camera",
  "Macbook M1", "Smart Washing Machine", "iPad Mini 2023", "PS5",
  "Earbuds", "Air Condition Inverter", "Flycam", "Electric Bike",
  "Gaming Computer", "Smart Air Purifier", "Apple Watch"
];

function Middle() {
  const leftCards = products.slice(0, 2);
  const bigCard = products.find((p) => p.big);
  const rightCards = products.slice(3);

  return (
    <div className="container bg-light rounded p-4">
      {/* Header */}
      <div className="row g-3 mb-4">
        <div className="col-md-6 d-flex align-items-center">
          <h2 className="fw-bold m-0">Best Weekly Deals</h2>
        </div>
        <div className="col-md-6 d-flex justify-content-md-end justify-content-start">
          <p className="m-0 px-3 py-2 rounded-pill text-white" style={{ background: "#F1352B" }}>
            expires in: -132 d :-9 h :-35 m :-45 s
          </p>
        </div>
      </div>

      {/* Product Layout */}
      <div className="row g-3 align-items-stretch">
        {/* Left column (2 stacked cards, equal height) */}
        <div className="col-md-3 d-flex flex-column h-100">
          {leftCards.map((product, i) => (
            <Card key={product.id} className={`shadow-sm flex-fill ${i === 0 ? "mb-3" : ""}`}>
              <Card.Img variant="top" src={product.img} />
              <Card.Body>
                <Card.Title className="fs-6">{product.title}</Card.Title>
                <Card.Text>
                  <span className="text-danger fw-bold">{product.price}</span>{" "}
                  <span className="text-muted text-decoration-line-through">{product.oldPrice}</span>
                </Card.Text>
                <Button size="sm" variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          ))}
        </div>

        {/* Middle big card (exactly matches height of left col) */}
        <div className="col-md-6 d-flex">
          {bigCard && (
            <Card className="shadow-lg flex-fill h-100">
              <Card.Img variant="top" src={bigCard.img} />
              <Card.Body>
                <Card.Title>{bigCard.title}</Card.Title>
                <Card.Text>
                  <span className="text-danger fw-bold">{bigCard.price}</span>{" "}
                  <span className="text-muted text-decoration-line-through">{bigCard.oldPrice}</span>
                </Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          )}
        </div>

        {/* Right column (2×2 cards, aligned with left column height) */}
        <div className="col-md-3 d-flex flex-column">
          <div className="row g-3 flex-fill">
            {rightCards.map((product) => (
              <div key={product.id} className="col-6 d-flex">
                <Card className="shadow-sm flex-fill">
                  <Card.Img variant="top" src={product.img} />
                  <Card.Body>
                    <Card.Title className="fs-6">{product.title}</Card.Title>
                    <Card.Text>
                      <span className="text-danger fw-bold">{product.price}</span>{" "}
                      <span className="text-muted text-decoration-line-through">{product.oldPrice}</span>
                    </Card.Text>
                    <Button size="sm" variant="primary">Buy Now</Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trending Search Section */}
      <div className="mt-5">
        <h4 className="fw-bold mb-3">Trending Search</h4>
        <div className="d-flex flex-wrap gap-2 mb-4">
          {trendingSearch.map((item, idx) => (
            <span
              key={idx}
              className="px-3 py-2 rounded-pill bg-light text-secondary border"
              style={{ fontSize: "0.9rem", cursor: "pointer" }}
            >
              {item}
            </span>
          ))}
        </div>

        {/* Banner Section */}
        <div
          className="d-flex align-items-center justify-content-between p-4 rounded"
          style={{
  backgroundImage: `url("./images/banner.png")`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "#fff",
  height:"140px",
  width:"1000x"
}}
        >
        
        
        </div>
      </div>
    </div>
  );
}

export default Middle;
