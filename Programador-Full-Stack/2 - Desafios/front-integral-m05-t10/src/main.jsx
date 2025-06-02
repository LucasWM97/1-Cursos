import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { UserProvider } from "./context/Context.jsx";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <ToastContainer />
    <App />
  </UserProvider>
);
