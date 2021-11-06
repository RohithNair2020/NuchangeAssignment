import "./Home.css";
import Product from "./Product";

import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home-container">
          <img
            className="banner-img"
            src="https://images.pexels.com/photos/2733918/pexels-photo-2733918.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="banner-img"
          ></img>
          <div className="banner-text">
            <h2 className="red">Happy Diwali !</h2>
            <h1 className="green">Shop for &#x20B9;500,</h1>
            <h2>
              <span className="red">and get 30% off</span>
              <span className="red"> !</span>
            </h2>
          </div>
          <div className="product-row">
            <Product
              name="Orange"
              availability="In Stock"
              quantity="500gm"
              price="25"
              image="https://images.unsplash.com/photo-1591206369811-4eeb2f03bc95?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG9yYW5nZSUyMGZydWl0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
            />
            <Product
              name="Orange"
              availability="In Stock"
              quantity="500gm"
              price="25"
              image="https://images.unsplash.com/photo-1591206369811-4eeb2f03bc95?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG9yYW5nZSUyMGZydWl0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
            />
            <Product
              name="Banana"
              availability="In Stock"
              quantity="500gm"
              price="50"
              image="https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmFuYW5hfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
            />
            <Product
              name="Potato"
              availability="In Stock"
              quantity="1kg"
              price="30"
              image="https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG90YXRvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
            />
            <Product
              name="Drumsticks"
              availability="Out of Stock"
              quantity="500gm"
              price="20"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ8Fu1UFJ1ojbXQSAMce2sbRXmrz6Q48DY0g&usqp=CAU"
            />
          </div>
          <div className="product-row">
            <Product
              name="Eggs - Organic"
              availability="In Stock"
              quantity="6 Nos"
              price="48"
              image="https://images.unsplash.com/photo-1569288052389-dac9b01c9c05?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzl8fGVnZ3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
            />
            <Product
              name="Salmon"
              availability="In Stock"
              quantity="500gm"
              price="190"
              image="https://images.unsplash.com/photo-1499125562588-29fb8a56b5d5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsbW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
            />
            <Product
              name="Paneer"
              availability="In Stock"
              quantity="500gm"
              price="180"
              image="https://media.istockphoto.com/photos/traditional-indian-cheese-panner-picture-id508376390?k=20&m=508376390&s=612x612&w=0&h=m6d1xfDvxassSzK1HGiWJBMKqVxpHU0Ryx3gD_VPdR0="
            />
          </div>
          <div className="product-row">
            <Product
              name="Chicken Breast"
              availability="In Stock"
              quantity="500gm"
              price="200"
              image="https://images.pexels.com/photos/5769384/pexels-photo-5769384.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            />
            <Product
              name="Cheese"
              availability="In Stock"
              quantity="500gm"
              price="160"
              image="https://images.unsplash.com/photo-1618164436241-4473940d1f5c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNoZWVzZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
            />
            <Product
              name="Milk"
              availability="In Stock"
              quantity="500 ml"
              price="30"
              image="https://images.unsplash.com/photo-1596151163116-98a5033814c2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGRhaXJ5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
            />
            <Product
              name="Tomato"
              availability="In Stock"
              quantity="500gm"
              price="40"
              image="https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
