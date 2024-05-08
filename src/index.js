import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import AdminLogin from '../src/Pages/AdminLogin'
import AdminReg from '../src/Pages/AdminReg'
import UserLogin from '../src/Pages/UserLogin'
import UserReg from '../src/Pages/UserReg'
import Table from '../src/Pages/Table';
import AddUser from '../src/Pages/AddUser';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import CreateMeeting from './Pages/CreateMeeting';
import ForgotPassword from './Pages/ForgotPassword';




const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "adminlogin",
    element: <AdminLogin/>,
  },
  {
    path: "userlogin",
    element: <UserLogin/>,
  },
  {
    path: "adminreg",
    element: <AdminReg/>,
  },
  {
    path: "userreg",
    element: <UserReg/>,
  },
  {
    path: "table",
    element: <Table/>,
  },
  {
    path: "adduser",
    element: <AddUser/>,
  },
  {
    path: "createmeeting",
    element: <CreateMeeting/>,
  },
  {
    path: "forgotpassword",
    element: <ForgotPassword/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <RouterProvider router={router}/>
  
);
