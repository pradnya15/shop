import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Product from './components/Product';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Product/>
      <ProductList/>
      <Cart/>
    </div>
  );
}

export default App;
