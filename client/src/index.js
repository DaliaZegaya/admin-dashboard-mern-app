import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import OrdersProvider from './contexts/orders-context'
import CountriesProvider from './contexts/countries-context';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductsProvider from './contexts/products-context'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ProductsProvider>
      <OrdersProvider>
        <CountriesProvider>
          <App />
        </CountriesProvider>
      </OrdersProvider>
      </ProductsProvider>
    </React.StrictMode>
  </BrowserRouter>

);

reportWebVitals();
