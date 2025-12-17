import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Cart from './pages/Cart';
import Product from './pages/Product';
import ProductDetails from './pages/ProductDetails';
import Menu from './pages/Menu';
import Favorites from './pages/Favorites';
import Contact from './pages/Contact';
import Layout from './pages/Layout';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="product" element={<Product />} />
            <Route path="product/:id" element={<ProductDetails />} />
            <Route path="menu" element={<Menu />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<h1 className='text-center text-3xl '>Error 404 | Page not Found </h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
