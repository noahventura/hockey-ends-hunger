import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import PreviousEvents from './components/PreviousEvents';
import UpcomingEvents from './components/UpcomingEvents';
import Sponsors from './components/Sponsors';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/previous-events" element={<PreviousEvents />} />
          <Route path="/upcoming-events" element={<UpcomingEvents />} />
          <Route path="/sponsors" element={<Sponsors />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;