import React from "react";
import { BrowserRouter } from "react-router-dom";

import { useStateContext } from "./contexts/ContextProvider";
import "./App.css";

import ApplicationRoutes from "./routes";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Toaster />
      <BrowserRouter>
        <ApplicationRoutes />
      </BrowserRouter>
    </div>
  );
};

export default App;
