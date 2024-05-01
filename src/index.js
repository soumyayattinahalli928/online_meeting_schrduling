import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import AdminLogin from './components/AdminLogin';
import UserLogin from './Pages/UserLogin';
import About from './Pages/About';




const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "about",
    element: <About/>,
  },

  {
    path: "adminlogin",
    element: <AdminLogin/>,
  },
  {
    path: "userlogin",
    element: <UserLogin/>,
  },


]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <RouterProvider router={router}/>
  
);
