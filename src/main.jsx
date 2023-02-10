import * as React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App'
import {MemoryRouter} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <MemoryRouter > */}
    <App />
    {/* </MemoryRouter> */}
  </React.StrictMode>,
)
