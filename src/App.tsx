import React, { useEffect } from "react";
import { Routes, Route, Navigate, useLocation, } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../moduls/firebase";


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
import ChatPage from "../moduls/ChatPage";
import ChatToggle from "../moduls/ChatToggleButton";
import Smarthome from "../moduls/Smart-home";
import Laptops from "../moduls/Laptops-tablets";
import Routers from "../moduls/Routers"
import Gamepads from "../moduls/Gamepads";
import Etransport from "../moduls/E-transport"
import Accessories from "../moduls/Accessories"
import Smartwatch from "../moduls/Smart-watches"
import Audio from "../moduls/Audio"
import Storage from "../moduls/Sorage"
import Conect from "../moduls/Connectivity"
import Other from "../moduls/Other"
import Teamhavelvacner from "../moduls/Teamhavelvacner"
import Teamtv from "../moduls/Teamtv"
import Myteam from "../moduls/Myteam"
import Teampay from "../moduls/Teampay"
import Teamenergy from "../moduls/Teamenergy"
import Mermasin from "../moduls/Mermasin"
import Museum from "../moduls/Museum"
import Norutyunner from "../moduls/Norutyunner"
import Ashxatanq from "../moduls/Ashxatanq"
import Ethics from "../moduls/Ethics"
import Zargacum from "../moduls/Zargacum"
import Bazhneter from "../moduls/Bazhneter"
import Hashvetvutyunner from "../moduls/Hashvetvutyunner"
import Paymaner from "../moduls/Paymaner"
import Anvtangutyun from "../moduls/Anvtangutyun"
import Eshoppaymaner from "../moduls/Eshoppaymaner"
import Aparik from "../moduls/Aparik"
import Arakum from "../moduls/Arakum"
import Vacharqi from "../moduls/Vacharqi-kentronner"
import Tackuyt from "../moduls/Tackuyt"
import Bjj from "../moduls/Bjjnayin-tsakuyt"
import Internet from "../moduls/Internet-tsakuyt"
import Pastatuxt from "../moduls/Ogtagorci-pastatuxte"

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const [user, loading] = useAuthState(auth);
  if (loading) return <p>Բեռնվում է...</p>;
  return user ? <>{children}</> : <Navigate to="/login" replace />;
};

const hideHeaderOnPaths: string[] = [
  "/eshop",
  "/smartphones",
  "/numbers",
  "/business",
  "/offers",
  "/equipment",
  "/login",
  "/registration",
  "/smart-home",
  "/laptops-tablets",
  "/routers",
  "/gamepads",
  "/e-transport",
  "/accessories",
  "/smart-watches",
  "/audio",
  "/storage",
  "/connectivity",
  "/other"
];

const App: React.FC = () => {
  const location = useLocation();
  const shouldShowHeader = !hideHeaderOnPaths.includes(location.pathname);
  const shouldShowChat = !["/login", "/registration"].includes(location.pathname);

  return (
    <>
      {shouldShowHeader && <Header />}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Navigate to="/anhatner" replace />} />

        <Route path="/anhatner" element={<PrivateRoute><Anhatner /></PrivateRoute>} />
        <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
        <Route path="/business" element={<PrivateRoute><Business /></PrivateRoute>} />
        <Route path="/eshop" element={<PrivateRoute><Eshop /></PrivateRoute>} />
        <Route path="/smartphones" element={<PrivateRoute><Smartphones /></PrivateRoute>} />
        <Route path="/offers" element={<PrivateRoute><Offers /></PrivateRoute>} />
        <Route path="/numbers" element={<PrivateRoute><Numbers /></PrivateRoute>} />
        <Route path="/equipment" element={<PrivateRoute><Equipment /></PrivateRoute>} />
        <Route path="/chat/:email" element={<ChatPage />} />
        <Route path="/smart-home" element={<PrivateRoute><Smarthome /></PrivateRoute>} />
        <Route path="/laptops-tablets" element={<PrivateRoute><Laptops /></PrivateRoute>} />
        <Route path="/routers" element={<PrivateRoute><Routers /></PrivateRoute>} />
        <Route path="/gamepads" element={<PrivateRoute><Gamepads /></PrivateRoute>} />
        <Route path="/e-transport" element={<PrivateRoute><Etransport /></PrivateRoute>} />
        <Route path="/accessories" element={<PrivateRoute><Accessories /></PrivateRoute>} />
        <Route path="/Smart-watches" element={<PrivateRoute><Smartwatch /></PrivateRoute>} />
        <Route path="/Audio" element={<PrivateRoute><Audio /></PrivateRoute>} />
        <Route path="/Storage" element={<PrivateRoute><Storage /></PrivateRoute>} />
        <Route path="/connectivity" element={<PrivateRoute><Conect /></PrivateRoute>} />
        <Route path="/Other" element={<PrivateRoute><Other /></PrivateRoute>} />
        <Route path="/Teamhavelvacner" element={<PrivateRoute><Teamhavelvacner /></PrivateRoute>} />
        <Route path="/Teamtv" element={<PrivateRoute><Teamtv /></PrivateRoute>} />
        <Route path="/Myteam" element={<PrivateRoute><Myteam /></PrivateRoute>} />
        <Route path="/Teampay" element={<PrivateRoute><Teampay /></PrivateRoute>} />
        <Route path="/Teamenergy" element={<PrivateRoute><Teamenergy /></PrivateRoute>} />
        <Route path="/Mermasin" element={<PrivateRoute><Mermasin /></PrivateRoute>} />
        <Route path="/Museum" element={<PrivateRoute><Museum /></PrivateRoute>} />
        <Route path="/Norutyunner" element={<PrivateRoute><Norutyunner /></PrivateRoute>} />
        <Route path="/Ashxatanq" element={<PrivateRoute><Ashxatanq /></PrivateRoute>} />
        <Route path="/Ethics" element={<PrivateRoute><Ethics /></PrivateRoute>} />
        <Route path="/Zargacum" element={<PrivateRoute><Zargacum /></PrivateRoute>} />
        <Route path="/Bazhneter" element={<PrivateRoute><Bazhneter /></PrivateRoute>} />
        <Route path="/Hashvetvutyunner" element={<PrivateRoute><Hashvetvutyunner /></PrivateRoute>} />
        <Route path="/Paymaner" element={<PrivateRoute><Paymaner /></PrivateRoute>} />
        <Route path="/Anvtangutyun" element={<PrivateRoute><Anvtangutyun /></PrivateRoute>} />
        <Route path="/Eshoppaymaner" element={<PrivateRoute><Eshoppaymaner /></PrivateRoute>} />
        <Route path="/Aparik" element={<PrivateRoute><Aparik /></PrivateRoute>} />
        <Route path="/Arakum" element={<PrivateRoute><Arakum /></PrivateRoute>} />
        <Route path="/Vacharqi-kentronner" element={<PrivateRoute><Vacharqi /></PrivateRoute>} />
        <Route path="/Tackuyt" element={<PrivateRoute><Tackuyt /></PrivateRoute>} />
        <Route path="/Bjjnayin-tsakuyt" element={<PrivateRoute><Bjj /></PrivateRoute>} />
        <Route path="/Internet-tsakuyt" element={<PrivateRoute><Internet /></PrivateRoute>} />
        <Route path="/Ogtagorci-pastatuxte" element={<PrivateRoute><Pastatuxt /></PrivateRoute>} />

        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>

      {shouldShowChat && <ChatToggle />}
    </>
  );
};

export default App;

