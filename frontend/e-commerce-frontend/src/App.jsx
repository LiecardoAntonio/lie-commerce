import { useState } from 'react'
import Navbar from './components/navbar/Navbar.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProductProvider } from './products-data/ProductContext.jsx';

import Home from './pages/Home.jsx'
import Promo from './pages/Promo.jsx'
import Wishlist from './pages/Wishlist.jsx'
import Cart from './pages/Cart.jsx'
import LoginRegister from './pages/LoginRegister.jsx'

function App() {
  return (
    <>
      <ProductProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/promo' element={<Promo />} />
            <Route path='/wishlist' element={<Wishlist />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/loginOrRegister' element={<LoginRegister />} />
          </Routes>
        </BrowserRouter>
      </ProductProvider>
    </>
  )
}

export default App
