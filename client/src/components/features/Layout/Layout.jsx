import "./Layout.css";
import React from "react";
import BoxCard from "../Bar-chart/Bar-chart";
import NavbarPage from "../Header/Header";
import OrdersProvider from "../../../contexts/orders-context";
import ProductsProvider from "../../../contexts/products-context";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Router from "../../../routes/Router";


function Layout () {
  return (
    <div className="layout ">
      {/* <div className="sidebar ">
        <Sidebar/>
      </div> */}

      {/* <div className="nav">
        <div className="navbar">
          <Navbar/>
        </div>
      </div> */}
      <div>
      <Navbar/>
      </div>
      <div>
          <Router/>
        </div>
    </div>
  )
}
export default Layout;


// function Layout() {
//   return (
//     <div className="layout">
//       <NavbarPage />
//       <ProductsProvider>
//         <PieChart />
//         <ProductCard />
//       </ProductsProvider>
//       <OrdersProvider>
//         <BarChart />
//       </OrdersProvider>
//     </div>
//   );
// };

// export default Layout;
