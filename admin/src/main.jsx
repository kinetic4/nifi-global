
import { Fragment } from "react";
import { createRoot } from 'react-dom/client'
import App from './App.jsx' 
import './assets/scss/datum.scss'

import 'leaflet/dist/leaflet.css'
import './assets/scss/custom.scss'
import './assets/scss/customizer.scss'
import "flatpickr/dist/flatpickr.css";

//router
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// page
import { LayoutsRoute } from "./router/layout-router";

const router = createBrowserRouter([...LayoutsRoute], { basename: import.meta.env.BASE_URL });

createRoot(document.getElementById('root')).render(
  <Fragment>
    <App>
      <RouterProvider router={router}></RouterProvider>
    </App>
  </Fragment>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

