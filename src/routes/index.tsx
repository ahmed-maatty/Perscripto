import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router";
import RootLayout from "../views/Layout";
import Home from "../views/Home/Home";
import AllDoctors from "../views/Home/AllDoctors";
import About from "../views/Home/About";
import Contact from "../views/Home/Contact";
import Doctor from "../views/Home/Doctor";
import Register from "../views/Auth/Register";
import Login from "../views/Auth/Login";
import Dashboard from "../views/Dashboard/Dashboard";
import Layout from "../views/Dashboard/DashboardLayout";
import AddDoctor from "../views/Dashboard/AddDoctor";
import Appointments from "../views/Dashboard/Appointments";
import DoctorList from "../views/Dashboard/DoctorList";
import ProtectedRoute from "../components/ProtectedRoute";

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
        <Route
          path="register"
          element={<ProtectedRoute Route={"register"} Child={<Register />} />}
        />
        <Route
          path="login"
          element={<ProtectedRoute Route={"login"} Child={<Login />} />}
        />
      </Route>

      <Route path="/dashboard" element={<Layout />}>
        <Route
          index
          element={<ProtectedRoute Route={"dashboard"} Child={<Dashboard />} />}
        />
        <Route
          path="add-doctor"
          element={<ProtectedRoute Route={"dashboard"} Child={<AddDoctor />} />}
        />
        <Route
          path="appointment"
          element={
            <ProtectedRoute Route={"dashboard"} Child={<Appointments />} />
          }
        />
        <Route
          path="doctors"
          element={
            <ProtectedRoute Route={"dashboard"} Child={<DoctorList />} />
          }
        />
      </Route>
    </>
  )
);

export default router;
