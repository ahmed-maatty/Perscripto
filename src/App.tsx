import "./style/index.css";
import router from "./routes/index";
import { RouterProvider } from "react-router";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
