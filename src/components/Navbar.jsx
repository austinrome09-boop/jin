import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false); // For mobile menu
  const [isVisible, setIsVisible] = useState(true); // For scroll animation
  const location = useLocation();

  const isHome = location.pathname === '/';

  // --- 1. SCROLL ANIMATION LOGIC ---
  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop && currentScroll > 50) {
        // Scrolling Down -> Hide Navbar
        setIsVisible(false);
      } else {
        // Scrolling Up -> Show Navbar
        setIsVisible(true);
      }
      
      // Update last scroll position (prevent negative values)
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- 2. MOBILE MENU LOGIC ---
  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const closeMenu = () => {
    setIsActive(false);
  };

  return (
    // We control the 'top' style dynamically based on isVisible state
    <header 
      style={{ top: isVisible ? '0' : '-100px' }} 
      className={isActive ? 'active' : ''}
    >
      <Link to="/" className="logo">jin.</Link>
      
      <div className="menu-toggle" onClick={toggleMenu}>
        <i className={`fas ${isActive ? 'fa-times' : 'fa-bars'}`}></i>
      </div>

      <nav className={isActive ? 'active' : ''}>
        {isHome ? (
            <>
                <a href="#home" onClick={closeMenu}>Home</a>
                <a href="#about" onClick={closeMenu}>About Me</a>
                <a href="#skills" onClick={closeMenu}>What I Do</a>
                <a href="#services" onClick={closeMenu}>My Journey</a>
                <a href="#contact" onClick={closeMenu}>Contact</a>
            </>
        ) : (
            <>
                <Link to="/" onClick={closeMenu}>Home</Link>
                <Link to="/#about" onClick={closeMenu}>About Me</Link>
                <Link to="/#skills" onClick={closeMenu}>What I Do</Link>
                <Link to="/#services" onClick={closeMenu}>My Journey</Link>
                <Link to="/#contact" onClick={closeMenu}>Contact</Link>
            </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;