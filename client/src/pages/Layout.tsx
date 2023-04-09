import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Header from "../components/Header";

// type Props = {}
// {}: Props
function Layout() {
  return (
    <div className="layout">
      <Header />
      <Navigation />
      {/* <NavigationMobile />  */}
      <main className="layout__outlet">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
