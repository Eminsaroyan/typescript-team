import React, { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../moduls/firebase";

// Մոդուլներ
import Header from "../moduls/Header";
import Anhatner from "../moduls/Anhatner";
import Cart from "../moduls/Cart";
import Business from "../moduls/Business";
import Eshop from "../moduls/Eshop";
import Smartphones from "../moduls/Smartphones";
import Offers from "../moduls/Offers";
import Numbers from "../moduls/Numbers";
import Equipment from "../moduls/Equipment";
import Login from "../moduls/Login";
import Registration from "../moduls/Registration";

// Scroll վերև երբ route փոխվում է
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Պաշտպանված էջերի փաթեթիչ
const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const [user, loading] = useAuthState(auth);
  if (loading) return <p>Բեռնվում է...</p>;
  return user ? <>{children}</> : <Navigate to="/login" replace />;
};

// Որ route-ներում չցուցադրել Header-ը
const hideHeaderOnPaths: string[] = [
  "/eshop",
  "/smartphones",
  "/numbers",
  "/business",
  "/offers",
  "/equipment",
  "/login",
  "/registration"
];

const App: React.FC = () => {
  const location = useLocation();
  const shouldShowHeader = !hideHeaderOnPaths.includes(location.pathname);

  return (
    <>
      {shouldShowHeader && <Header />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to="/anhatner" replace />} />

        {/* Պաշտպանված route-ներ */}
        <Route path="/anhatner" element={<PrivateRoute><Anhatner /></PrivateRoute>} />
        <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
        <Route path="/business" element={<PrivateRoute><Business /></PrivateRoute>} />
        <Route path="/eshop" element={<PrivateRoute><Eshop /></PrivateRoute>} />
        <Route path="/smartphones" element={<PrivateRoute><Smartphones /></PrivateRoute>} />
        <Route path="/offers" element={<PrivateRoute><Offers /></PrivateRoute>} />
        <Route path="/numbers" element={<PrivateRoute><Numbers /></PrivateRoute>} />
        <Route path="/equipment" element={<PrivateRoute><Equipment /></PrivateRoute>} />

        {/* Մուտքի էջը */}
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </>
  );
};

export default App;
