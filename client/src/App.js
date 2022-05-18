import './App.css';
import Form from './components/Form';
import List from './components/List';
import Details from './components/Details';
import { Link, Routes, Rout, Navigate, Route } from "react-router-dom"
import React, { useState } from 'react'

function App() {


  const [products, setProducts] = useState([]);


  return (
    <div className="App">
      <h1>Product Manager</h1>

      <Routes>
        <Route path='/' element={
          <>
            <Form products={products} setProducts={setProducts} />
            <List products={products} setProducts={setProducts} />
          </>
        } />
        <Route path='/products/:id' element={<Details />} />



      </Routes>
    </div>
  );
}

export default App;
