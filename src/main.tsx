import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createApi, YNABProvider } from './YNAB.tsx'

const router = createBrowserRouter([{
  path: '/',
  element: <App />
}])

const api = createApi()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <YNABProvider api={api}>
      <RouterProvider router={router} />
    </YNABProvider>
  </React.StrictMode>,
)
