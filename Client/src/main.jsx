import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//import { Button } from "antd";  // component import
import "antd/dist/reset.css";   // AntD CSS import
import "./App.css";
import store from './redux/store.jsx'
import { Provider } from 'react-redux'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={store}>
    <App />
  </Provider>
  </StrictMode>,
)
