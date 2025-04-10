import React from "react";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="grow ml-16 md:ml-64 h-full lg:h-screen bg-gray-100 text-gray-900">
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
