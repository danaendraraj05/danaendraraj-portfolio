import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import Internship from "../pages/Internships/Internships";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Landing from "../pages/landing/Landing";
import Portfolio from "../pages/portfolio/Portfolio";
//import Projects from "./Project";
import PageNotFound from "../pages/404/PageNotFound";

const AnimatedRoutes = ({ personalDetails }) => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Landing name={personalDetails.name} tagline={personalDetails.tagline} />} />   
      <Route
        path="/about"
        element={
          <About
            name={personalDetails.name}
            location={personalDetails.location}
            email={personalDetails.email}
            availability={personalDetails.availability}
            brand={personalDetails.brand}
          />
        }
      />
      <Route path="/projects" element={<Portfolio />} />
      <Route
        path="/contact"
        element={
          <Contact name={personalDetails.name} location={personalDetails.location} email={personalDetails.email} />
        }
      />
        <Route path="/experience" element={<Internship />} />
        <Route path="/page-not-found" element={<PageNotFound />} />
      <Route path="*" element={<Navigate to="/page-not-found" />} />
    </Routes>
  );
};

export default AnimatedRoutes;
