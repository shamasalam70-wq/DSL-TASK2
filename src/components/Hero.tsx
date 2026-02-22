import React from 'react';

const Hero: React.FC = () => {
  const styles = {
    hero: {
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1478&auto=format&fit=crop')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      textAlign: 'center' as const,
      color: 'white',
      padding: '0 20px',
    },
    content: {
      maxWidth: '800px',
    },
    title: {
      fontSize: '4rem',
      fontWeight: 'bold',
      marginBottom: '20px',
      fontFamily: 'var(--font-heading)',
      color: 'white',
      textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
    },
    subtitle: {
      fontSize: '1.5rem',
      marginBottom: '40px',
      fontWeight: '300',
    },
  };

  return (
    <section id="home" style={styles.hero}>
      <div style={styles.content}>
        <h1 style={styles.title}>Wake Up Your Senses with <span>Java Buzz</span></h1>
        <p style={styles.subtitle}>
          The finest artisanal coffee beans, expert baristas, and a warm, inviting atmosphere designed for your perfect moment.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <a href="#menu" className="btn-primary">View Our Menu</a>
          <button className="btn-primary" style={{ backgroundColor: 'transparent', border: '2px solid white' }}>Place Order</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
