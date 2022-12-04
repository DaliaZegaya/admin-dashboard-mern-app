import "./Layout.css";
import React from "react";
import BoxCard from "../Bar-chart/Bar-chart";
import NavbarPage from "../Header/Header";
import OrdersProvider from "../../../contexts/orders-context";
import { PieChart } from "../Pie-chart/Pie-chart";
import ProductsProvider from "../../../contexts/products-context";
import BarChart from "../Bar-chart/Bar-chart"
import ProductCard from "../Product-card/Product-card";


function Layout() {
  return (
    <div className="layout">
      <NavbarPage />
      <ProductsProvider>
        <PieChart />
        <ProductCard />
      </ProductsProvider>
      <OrdersProvider>
        <BarChart />
      </OrdersProvider>
    </div>
  );
};

export default Layout;
