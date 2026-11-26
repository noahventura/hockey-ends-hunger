import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileDock from './components/MobileDock';
import Home from './components/Home';
import About from './components/About';
import PreviousEvents from './components/PreviousEvents';
import UpcomingEvents from './components/UpcomingEvents';
import Sponsors from './components/Sponsors';

// jump to the top when the route changes, or to the section a #hash names
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function App() {
  return (
    <Router basename="/v2">
      <ScrollToTop />
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/previous-events" element={<PreviousEvents />} />
          <Route path="/upcoming-events" element={<UpcomingEvents />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <MobileDock />
    </Router>
  );
}

export default App;
