import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css'

import { 
  createBrowserRouter, 
  RouterProvider
} from "react-router-dom";

//Routes
import Home from "./routes/Home.jsx";
import Contact from "./routes/Contact.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/framermotionpractice/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/framermotionpractice/",
        element: <Home />
      },
      {
        path: "contact",
        element: <Contact />
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
