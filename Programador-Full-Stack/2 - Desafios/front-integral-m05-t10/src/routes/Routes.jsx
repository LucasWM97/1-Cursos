import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Main } from "../pages/Main";
import { ClientPage } from "../pages/clients/Clients";
import { Charges } from "../pages/Charges";
import { ProtectedRoutes } from "../helpers/ProtectedRoutes";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import RegisterPassword from "../pages/RegisterPassword";
import RegisterCompleted from "../pages/RegisterCompleted";
import { ClientDetail } from "../pages/ClientDetail/clientDetail";

export function MainRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registerPassword" element={<RegisterPassword />} />
        <Route path="/registerCompleted" element={<RegisterCompleted />} />
        <Route path="/register" element={<Register />} />

        <Route element={<ProtectedRoutes redirectTo="/login" />}>
          <Route path="/home" element={<Main />} />
          <Route path="/clients" element={<ClientPage />} />
          <Route path="/clientDetail" element={<ClientDetail />} />
          <Route path="/charges" element={<Charges />} />
        </Route>
      </Routes>
    </Router>
  );
}
