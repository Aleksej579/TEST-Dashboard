import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'normalize.css';
import './index.css'
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Customers from "./routes/customers";
import Product from "./routes/product";
import Income from "./routes/income";
import Promote from "./routes/promote";
import Help from "./routes/help";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "customers",
        element: <Customers />,
      },
      {
        path: "product",
        element: <Product />,
      },
      {
        path: "income",
        element: <Income />,
      },
      {
        path: "promote",
        element: <Promote />,
      },
      {
        path: "help",
        element: <Help />,
      },
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
