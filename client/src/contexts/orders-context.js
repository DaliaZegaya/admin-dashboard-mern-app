import { createContext, useEffect, useState } from "react";
import getAllOrders from "../services/orders";

export const ordersContext = createContext();

function OrdersProvider({ children }) {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    getAllOrders().then(res => setOrders(res.orders));
  }, []);
  return (
    <ordersContext.Provider value={{ orders, setOrders}}>
      {children}
    </ordersContext.Provider>
  );
}

export default OrdersProvider;