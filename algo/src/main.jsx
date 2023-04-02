import React, {Suspense}from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import './18n.js'
ReactDOM.createRoot(document.getElementById('root')).render(
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>

              <App />


      </BrowserRouter>
    </Suspense>
)
