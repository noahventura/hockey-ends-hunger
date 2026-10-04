import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import PreviousEvents from './components/PreviousEvents';
import UpcomingEvents from './components/UpcomingEvents';
import Sponsors from './components/Sponsors';

// jump to the top when the route changes
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/previous-events" element={<PreviousEvents />} />
            <Route path="/upcoming-events" element={<UpcomingEvents />} />
            <Route path="/sponsors" element={<Sponsors />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
