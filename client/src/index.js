import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import OrdersProvider from './contexts/orders-context'
import CountriesProvider from './contexts/countries-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <OrdersProvider>
        <CountriesProvider>
          <App />
        </CountriesProvider>
      </OrdersProvider>
    </React.StrictMode>
  </BrowserRouter>

);

reportWebVitals();
