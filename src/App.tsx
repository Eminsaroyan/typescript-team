import React, { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Header from "../moduls/Header";
import Anhatner from "../moduls/Anhatner";
import Cart from "../moduls/Cart";

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
  // ...այլ ուղիներ
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
      </Routes>
    </>
  );
};

export default App;
