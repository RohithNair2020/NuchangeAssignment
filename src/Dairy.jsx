import Header from "./Header";
import Footer from "./Footer";
import Product from "./Product";
import productData from "./data";
import "./Home.css";

import React, { Component } from "react";

class Dairy extends Component {
  state = {
    productsList: productData,
  };
  render() {
    return (
      <div className="dairy">
        <Header />
        <div className="home-container">
          <img
            className="banner-img"
            src="https://images.pexels.com/photos/2733918/pexels-photo-2733918.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="banner-img"
          ></img>
          <div className="banner-text">
            <h2>Weekend Sale!</h2>
            <h1 className="green">Shop for &#x20B9;500,</h1>
            <h4>
              <span className="red">and get flat 30% off</span>
              <span className="red"> !</span>
            </h4>
          </div>
          <div className="product-container">
            {this.state.productsList.map((prod) => {
              if (prod.Category === "Dairy") {
                return (
                  <Product
                    key={prod.id}
                    name={prod.name}
                    availability={prod.available}
                    quantity={prod.quantity}
                    price={prod.price}
                    image={prod.image}
                  />
                );
              }
            })}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Dairy;
