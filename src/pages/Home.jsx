import React from "react";
import SideBar from "../components/sideBar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="flex">
        <div>
          <SideBar />
        </div>
        <div className="w-full p-8">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Home;
