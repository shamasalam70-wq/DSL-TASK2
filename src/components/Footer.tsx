import React from 'react';
import { Coffee, Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const styles = {
    footer: {
      backgroundColor: 'var(--primary-brown)',
      color: 'white',
      padding: '80px 0 40px',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '40px',
      marginBottom: '50px',
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '2rem',
      fontWeight: 'bold',
      fontFamily: 'var(--font-heading)',
      marginBottom: '20px',
    },
    logoIcon: {
      marginRight: '10px',
    },
    title: {
      fontSize: '1.2rem',
      fontWeight: '600',
      marginBottom: '25px',
      color: 'var(--light-green)',
    },
    text: {
      fontSize: '0.95rem',
      opacity: 0.8,
      marginBottom: '20px',
      lineHeight: '1.8',
    },
    socials: {
      display: 'flex',
      gap: '20px',
    },
    socialIcon: {
      backgroundColor: 'rgba(255,255,255,0.1)',
      padding: '10px',
      borderRadius: '50%',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    contact: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      marginBottom: '15px',
      opacity: 0.8,
    },
    bottom: {
      borderTop: '1px solid rgba(255,255,255,0.1)',
      paddingTop: '30px',
      textAlign: 'center' as const,
      fontSize: '0.9rem',
      opacity: 0.6,
    }
  };

  return (
    <footer style={styles.footer}>
      <div className="container">
        <div style={styles.grid}>
          <div>
            <div style={styles.logo}>
              <Coffee size={36} style={styles.logoIcon} />
              <span>Java Buzz</span>
            </div>
            <p style={styles.text}>
              Java Buzz is your neighborhood destination for specialty coffee, hand-crafted pastries, and a warm, inviting community.
            </p>
            <div style={styles.socials}>
              <div style={styles.socialIcon}><Facebook size={20} /></div>
              <div style={styles.socialIcon}><Twitter size={20} /></div>
              <div style={styles.socialIcon}><Instagram size={20} /></div>
            </div>
          </div>

          <div>
            <h4 style={styles.title}>Quick Links</h4>
            <ul style={{ ...styles.text, listStyle: 'none' }}>
              <li><a href="#home">Home</a></li>
              <li><a href="#menu">Our Menu</a></li>
              <li><a href="#location">Find Us</a></li>
              <li><a href="#blog">Latest News</a></li>
            </ul>
          </div>

          <div>
            <h4 style={styles.title}>Contact Info</h4>
            <div style={styles.contact}><Phone size={18} /> (555) 123-4567</div>
            <div style={styles.contact}><Mail size={18} /> hello@javabuzz.com</div>
            <div style={styles.contact}><span style={{ fontWeight: 600 }}>Open Hours:</span> Mon-Sun: 7am - 9pm</div>
          </div>
        </div>

        <div style={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Java Buzz. All rights reserved. Designed with ❤️ for caffeine lovers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
