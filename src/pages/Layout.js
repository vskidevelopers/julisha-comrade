import React from "react";
import Navbar from "../components/Navbar";

function Layout() {
  return (
    <div className="h-screen bg-slate-900 flex flex-col">
      <Navbar />
      <div className="h-1/2">Other Events</div>
    </div>
  );
}

export default Layout;
