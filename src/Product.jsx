import React, { Component } from 'react';
import './Product.css';

class Product extends Component {

    render() {
        return (
          <div className="product">
            <img
              className={!this.props.availability ? "bnw" : ""}
              src={this.props.image}
            ></img>
            <div className="product-details">
              <h3>{this.props.name}</h3>
              <small className={!this.props.availability ? "out-of-stock" : "in-stock"}>
                {this.props.availability ? "In Stock" : "Out of Stock"}
              </small>
              <div className="amt-price">
                <p>{this.props.quantity}</p>
                <strong>&#x20B9;{this.props.price}/-</strong>
              </div>
              <button className={!this.props.availability ? "add-to-basket-btn disabled" : "add-to-basket-btn"}>Add to Basket</button>
            </div>
          </div>
        );
    }
}

export default Product;