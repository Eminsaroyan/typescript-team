import React, { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Header from "../moduls/Header";
import Anhatner from "../moduls/Anhatner";
import Cart from "../moduls/Cart";
import Business from "../moduls/Business";
import Eshop from "../moduls/Eshop";
import Smartphones from "../moduls/Smartphones";
import Offers from "../moduls/Offers";
import Numbers from "../moduls/Numbers";
import Equipment from "../moduls/Equipment";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const hideHeaderOnPaths: string[] = [
  "/eshop",
  "/smartphones",
  "/numbers",
  "/business",
  "/offers",
  "/numbers",
  "/equipment"
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
        <Route path="/anhatner" element={<Anhatner />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/business" element={<Business />} />
        <Route path="/eshop" element={<Eshop />} />
        <Route path="/smartphones" element={<Smartphones />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/numbers" element={<Numbers />} />
        <Route path="/equipment" element={<Equipment />} />
      </Routes>
    </>
  );
};

export default App;
