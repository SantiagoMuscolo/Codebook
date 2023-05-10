import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ScrollToTop } from './components'
import { FilterProvider } from './context'
import { CartProvider } from './context';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <CartProvider>
      <FilterProvider>
        <ScrollToTop />
        <ToastContainer closeButton={false}/>
        <App />
      </FilterProvider>
    </CartProvider>
    </BrowserRouter>
  </React.StrictMode >,
)
