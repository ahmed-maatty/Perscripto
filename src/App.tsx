import "./style/index.css";
import router from "./routes/index";
import { RouterProvider } from "react-router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
