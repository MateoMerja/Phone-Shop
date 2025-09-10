import React from "react";
import { Router,Routes, Route } from "react-router-dom";
import RefundPolicy from "./Components/RefundPolicy";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import TermsOfService from "./Components/TermsOfService";
import ContactUs from "./Components/ContactUs";
import NavigationBar from "./Components/NavigationBar";
import FooterWeb from "./Components/FooterWeb";
function App() {
  return (
  
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <FooterWeb />
      </div>

  );
}

export default App;
