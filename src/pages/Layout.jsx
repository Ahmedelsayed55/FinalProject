import { useEffect } from "react";

import { Outlet  } from "react-router-dom";
import axios from "axios";
import { domain } from "../store/Store";
import NavBar from "../component/NavBar";
import Footer from './../component/Footer';

const Layout = () => {

  let token = localStorage.getItem("token");
  useEffect(() => {
    let url = domain + "/api/users/me";
    if (token) {
      axios
        .get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
           localStorage.setItem("user", JSON.stringify(res.data));
          // console.log(res.data);
        })
    }
  }, []);
 
  return (
    <div className="w-full flex flex-col gap-3">
      <header className="w-full">
        <NavBar />
      </header>
      <main className="w-full mt-20">
        <Outlet />
      </main>
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
