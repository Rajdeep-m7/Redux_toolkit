import React from 'react'
import Header from './Header'
import Product from './Product'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import CartList from './CartList';

function App() {

  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/cart' element={<CartList/>} />
        <Route path='/' element={<Product/>} />
      </Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default App