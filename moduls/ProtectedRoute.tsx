// components/PrivateRoute.tsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) return <p>Բեռնվում է...</p>;

  return user ? <>{children}</> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
