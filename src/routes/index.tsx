import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router";
import RootLayout from "../views/Layout";
import Home from "../views/Home";
import Register from "../views/Register";
import Login from "../views/Login";
import Dashboard from "../views/Dashboard/Dashboard";
import Layout from "../views/Dashboard/DashboardLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
      </Route>

      <Route path="/auth" element={<RootLayout />}>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>

      <Route path="/dashboard" element={<Layout />}>
        <Route index element={<Dashboard />} />
      </Route>
    </>
  )
);

export default router;
