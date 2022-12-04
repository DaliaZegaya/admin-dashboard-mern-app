import { createContext, useEffect, useState } from "react";
import getAllProducts from "../services/products";

export const productsContext = createContext();

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAllProducts().then(res => setProducts(res.products));
  }, []);
  return (
    <productsContext.Provider value={{ products, setProducts}}>
      {children}
    </productsContext.Provider>
  );
}
export default ProductsProvider;