import React from 'react'
import ReactDOM from 'react-dom/client' 
import Context from './Components/Context/Context.jsx' 
import HomeByContext from './Components/HomeByContext/HomeByContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
    <HomeByContext></HomeByContext>
    </Context>
  </React.StrictMode>,
)
