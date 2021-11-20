import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cliente from "../container/cliente/Cliente";
import Habitacion from "../container/habitacion/Habitacion";
import Login from "../container/login/Login";
import Register from "../container/register/Register";
import Vendedor from "../container/vendedor/Vendedor";
import PrivateLayout from "../layout/private/PrivateLayout";
import PublicLayout from "../layout/public/PublicLayout";
import Perfil from "../container/perfil/Perfil";

const AppRoutes = () => {
  const isLoggedIn = localStorage.getItem("token");

  return (
    <Router>
      {!isLoggedIn && (
        <PublicLayout>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Login />} />
          </Routes>
        </PublicLayout>
      )}
      {isLoggedIn && (
        <PrivateLayout>
          <Routes>
            <Route exact path="/cliente" element={<Cliente />} />
            <Route path="/vendedor" element={<Vendedor />} />
            <Route path="/habitacion" element={<Habitacion />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="*" element={<Cliente />} />
          </Routes>
        </PrivateLayout>
      )}
    </Router>
  );
};

export default AppRoutes;
