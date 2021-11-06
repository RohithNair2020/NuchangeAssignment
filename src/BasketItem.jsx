import './BasketItem.css';
import React, { Component } from 'react';

class BasketItem extends Component {
    render() {
        return (
          <React.Fragment>
            <div className="basket-item">
              <img className="basket-image" src="https://images.unsplash.com/photo-1591206369811-4eeb2f03bc95?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG9yYW5nZSUyMGZydWl0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"></img>
              <div className="bsk-product-details">
                <h2>Name</h2>
                <p>Nagarjuna Farms</p>
                <small>In Stock</small>
                <div className="bsk-amt-price">
                  <p>Quantity</p>
                  <strong>Price</strong>
                </div>
                <a href="#"></a>
              </div>
            </div>
          </React.Fragment>
        );
    }
}

export default BasketItem;