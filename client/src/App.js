import './App.css';
import Form from './components/Form';
import List from './components/List';
import Details from './components/Details';
import Edit from './components/Edit';
import { Routes, Route } from "react-router-dom"
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
        <Route path='/update/:id' element={<Edit products={products} setProducts={setProducts} />} />



      </Routes>
    </div>
  );
}

export default App;
