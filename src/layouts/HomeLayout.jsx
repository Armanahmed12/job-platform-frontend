import React from "react";
import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <div className="mx-8">
      <Header />

      <Outlet />
    </div>
  );
};

export default HomeLayout;
