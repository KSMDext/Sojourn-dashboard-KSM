import React from "react";
import { Outlet } from "react-router-dom";
import Protected from "../hooks/protecteRoute";
import { Navbar, Sidebar } from "../components";

function MainLayout() {
  return (
    <div className="flex relative dark:bg-main-dark-bg">
      <div className="w-60 sticky sm:h-[100vh] sidebar dark:bg-secondary-dark-bg bg-stone-900 ">
        <Sidebar />
      </div>

      <div className="dark:bg-main-dark-bg  bg-zinc-200 w-full">
        <div className={`bg-main-bg dark:bg-main-dark-bg navbar w-full`}>
          <Navbar />
        </div>
        <div className="w-full h-[90vh] overflow-y-scroll">
          {/* outlet */}

          <Protected>
            <Outlet />
          </Protected>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
