import React, { Component } from 'react';
import './Basket.css';
import Header from './Header';
import BasketItem from './BasketItem';

class Basket extends Component {
    render() {
        return (
          <React.Fragment>
            <Header />
            <div className="basket-body">
              <div className="basket-list">
                <BasketItem />
              </div>
              <div className="subtotal-section"></div>
            </div>
          </React.Fragment>
        );
    }
}

export default Basket;