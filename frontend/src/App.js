import React from "react";
import { Router,Routes, Route } from "react-router-dom";
import RefundPolicy from "./Components/RefundPolicy";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import TermsOfService from "./Components/TermsOfService";
import ContactUs from "./Components/ContactUs";
import NavigationBar from "./Components/NavigationBar";
import FooterWeb from "./Components/FooterWeb";
import LogIn from "./Components/Login";
import SignUp from "./Components/SignUp";
import HomePage from "./Components/HomePage";
import CartPage from "./Components/CartPage";
import AboutUs from "./Components/AboutUs";

function App() {
  return (
    <div className="App">
      <NavigationBar />
        <Routes>
           <Route path="/" element={<HomePage />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />         
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/aboutUs" element={<AboutUs/>}/>
        </Routes>
      <FooterWeb />
    </div>
  );
}

export default App;
