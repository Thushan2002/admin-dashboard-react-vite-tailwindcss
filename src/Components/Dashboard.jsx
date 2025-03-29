import React from "react";
import Card from "./Card";
import { FaBox, FaShoppingCart } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="grow p-8">
      <h2 className="text-2xl mb-4">DAshboar 2</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card icon={<FaShoppingCart />} title={"Orders"} value={"140"} />
        <Card icon={<FaBox />} title={"Products"} value={"120"} />
        <Card icon={<FaShoppingCart />} title={"Users"} value={"30"} />
        <Card icon={<FaShoppingCart />} title={"Settings"} value={"11"} />
      </div>
    </div>
  );
};

export default Dashboard;
