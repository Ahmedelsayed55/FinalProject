import React from "react";
import NavBar from "../component/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../component/Footer";

const Layout = () => {
  return (
    <div className="w-full flex flex-col gap-3">
      <header className="w-full">
        <NavBar />
      </header>
      <main className="w-full">
        <Outlet />
      </main>
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
