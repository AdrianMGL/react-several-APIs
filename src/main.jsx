import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Api from './Components/Api'
import ApiEjercicio from './Components/ApiEjercicio'
import ApiBoton from './Components/ApiBoton'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Api/>
    <ApiEjercicio/>
    <ApiBoton/>
  </React.StrictMode>
)
