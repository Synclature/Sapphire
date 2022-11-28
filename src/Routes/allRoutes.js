import React from "react";
import { Redirect } from "react-router-dom";

//Dashboard
import DashboardEcommerce from "../pages/DashboardEcommerce";

// A
import A from "../pages/A"

// B
import B from "../pages/B"

// SOA
import SOA1 from "../pages/SOA"

// D
import D from "../pages/D"

// Statement Of Applicability
import  SOA from "../pages/Audits/SOA"


//login
import Login from "../pages/Authentication/Login";
import ForgetPasswordPage from "../pages/Authentication/ForgetPassword";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";


const authProtectedRoutes = [
  
  { path: "/dashboard", component: DashboardEcommerce },
  { path: "/index", component: DashboardEcommerce },

  // A
  { path: "/a", component: A },

    // B
  { path: "/b", component: B },

  // SOA
  { path: "/soa", component: SOA1 },

  // D
  { path: "/d", component: D },
  
  //Statement Of Applicability
  { path: "/audits/statement-of-applicability", component: SOA },
  

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/dashboard" />,
  },
];

const publicRoutes = [
  // Authentication Page
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPasswordPage },
  { path: "/register", component: Register },
];

export { authProtectedRoutes, publicRoutes };