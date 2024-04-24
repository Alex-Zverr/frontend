import React from 'react'
import ReactDOM from 'react-dom/client'
import './Assets/css/main.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
