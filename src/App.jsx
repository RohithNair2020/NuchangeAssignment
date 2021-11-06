import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import Fruits from "./Fruits";
import Home from "./Home";
import Dairy from "./Dairy";
import Meat from "./Meat";
import Vegetables from "./Vegetables";
import Basket from "./Basket";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/fruits" exact element={<Fruits/>}/>
          <Route path="/dairy" exact element={<Dairy/>}/>
          <Route path="/vegetables" exact element={<Vegetables/>}/>
          <Route path="/meat" exact element={<Meat/>}/>
          <Route path="/basket" exact element={<Basket/>}/>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
