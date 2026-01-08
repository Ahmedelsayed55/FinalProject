import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import Menu from "./pages/Menu";
import Favorites from "./pages/Favorites";
import Contact from "./pages/Contact";
import Layout from "./pages/Layout";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Order from "./pages/Order";

const App = () => {
  return (
    <div className=" bg-[#f1f1f1] text-black">
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/:productId" element={<ProductDetails />} />
            <Route path="cart" element={<Cart />} />
            <Route path="menu" element={<Menu />} />
            <Route path="menu/:id/" element={<Product />} />
            <Route path="menu/:id/:productId" element={<ProductDetails />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="favorites/:productId" element={<ProductDetails />} />
            <Route path="contact" element={<Contact />} />
            <Route path="order" element={<Order />} />
          </Route>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route
            path="*"
            element={
              <h1 className="text-center text-3xl ">
                Error 404 | Page not Found{" "}
              </h1>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
