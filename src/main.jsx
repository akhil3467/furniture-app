import {BrowserRouter} from "react-router-dom"
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'react-icons'
import StoreContextProvider from "./components/context/StoreContextProvider.jsx"

createRoot(document.getElementById('root')).render(
  <StoreContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </StoreContextProvider>
)
