import React from 'react'
import Header from './Header'
import Product from './Product'
import { useDispatch } from 'react-redux'
import { clearItem } from './redux/slice';

function App() {

  const dispatch = useDispatch();
  return (
    <div>
      <Header/>
      <h1>Redux toolkit tutorial</h1>
      <button onClick={()=> dispatch(clearItem())} className='clear-btn'>Clear cart</button>
      <Product />
    </div>
    
  )
}

export default App