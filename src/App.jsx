import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/global.css";
import LoanApplication from "./pages/LoanApplication";
import LandingPageMain from "./pages/landingPage";
import LoanForm from "./pages/Loanform";
import LoanStatusDashboard from "./pages/LoanStatusDashboard ";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPageMain />} />
        <Route path="/loan-form" element={<LoanForm />} />
        <Route path="/apply" element={<LoanApplication />} />
        <Route path="/dashboard" element={<LoanStatusDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
