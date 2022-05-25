import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

/**
 * Wrap para aquellas rutas
 * que requieran ser protegidas.
 * Verificamos dentro del atuhContext si existe una sesión
 * creada y el permiso respectivo para acceder a la ruta.
 */
const RequireAuth = () => {
  const { session } = useAuth();
  const location = useLocation();

  console.log("DESDE REQUIRE AUTH PROTECTED ROUTES");
  console.log(session);

  return session.token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
