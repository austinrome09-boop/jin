import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Djing from './pages/Djing';
import WebDev from './pages/WebDev';
import QA from './pages/QA';
import Construction from './pages/Construction';

function App() {
  const location = useLocation();

  useEffect(() => {
    // 1. Scroll to top on route change
    window.scrollTo(0, 0);

    // 2. Global Scroll Reveal Logic
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
          reveals[i].classList.add('active');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger once on load
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/djing" element={<Djing />} />
      <Route path="/web-dev" element={<WebDev />} />
      <Route path="/qa-engineering" element={<QA />} />
      <Route path="/qa" element={<QA />} />
      <Route path="/graphic-design" element={<Construction />} />
      <Route path="/video-editing" element={<Construction />} />
      <Route path="/social-media" element={<Construction />} />
    </Routes>
  );
}

export default App;