import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div>
      <main className="min-h-screen mx-auto overflow-hidden-clip bg-black">
        <Navbar/>
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
