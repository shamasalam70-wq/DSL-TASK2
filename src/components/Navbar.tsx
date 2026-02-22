import React, { useState, useEffect } from 'react';
import { Coffee, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'Location', href: '#location' },
    { name: 'Blog', href: '#blog' },
  ];

  const styles = {
    header: {
      position: 'fixed' as const,
      top: 0,
      left: 0,
      width: '100%',
      backgroundColor: isScrolled ? 'rgba(75, 44, 32, 0.95)' : 'transparent',
      padding: isScrolled ? '15px 0' : '25px 0',
      transition: 'all 0.3s ease',
      zIndex: 1000,
      boxShadow: isScrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
      color: isScrolled ? 'white' : 'white',
    },
    nav: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '1.8rem',
      fontWeight: 'bold',
      fontFamily: 'var(--font-heading)',
    },
    logoIcon: {
      marginRight: '10px',
      color: '#fff',
    },
    links: {
      display: 'flex',
      gap: '30px',
    },
    linkItem: {
      fontSize: '1rem',
      fontWeight: '500',
      textTransform: 'uppercase' as const,
      letterSpacing: '1px',
    },
    mobileMenuIcon: {
      display: 'none',
      cursor: 'pointer',
    },
    mobileMenu: {
      position: 'absolute' as const,
      top: '100%',
      left: 0,
      width: '100%',
      backgroundColor: 'var(--primary-brown)',
      flexDirection: 'column' as const,
      alignItems: 'center',
      padding: '20px 0',
      gap: '20px',
      display: isOpen ? 'flex' : 'none',
    }
  };

  return (
    <header style={styles.header}>
      <div className="container" style={styles.nav}>
        <a href="#home" style={styles.logo}>
          <Coffee size={32} style={styles.logoIcon} />
          <span>Java Buzz</span>
        </a>

        {/* Desktop Nav */}
        <ul style={styles.links} className="desktop-nav">
          {navLinks.map((link) => (
            <li key={link.name} style={styles.linkItem}>
              <a href={link.href} style={{ color: 'white' }}>{link.name}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div style={{ display: 'none' }} className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} color="white" /> : <Menu size={28} color="white" />}
        </div>

        {/* Mobile Menu */}
        <ul style={styles.mobileMenu}>
          {navLinks.map((link) => (
            <li key={link.name} style={styles.linkItem} onClick={() => setIsOpen(false)}>
              <a href={link.href} style={{ color: 'white' }}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
