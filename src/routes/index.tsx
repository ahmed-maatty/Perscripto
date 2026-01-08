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
import AddDoctor from "../views/Dashboard/AddDoctor";
import Appointments from "../views/Dashboard/Appointments";
import DoctorList from "../views/Dashboard/DoctorList";
import AllDoctors from "../views/AllDoctors";
import About from "../views/About";
import Contact from "../views/Contact";
import Doctor from "../views/Doctor";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="all-doctors" element={<AllDoctors />} />
        <Route path="doctor/:id" element={<Doctor />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      <Route path="/auth" element={<RootLayout />}>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>

      <Route path="/dashboard" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="add-doctor" element={<AddDoctor />} />
        <Route path="appointment" element={<Appointments />} />
        <Route path="doctors" element={<DoctorList />} />
      </Route>
    </>
  )
);

export default router;
