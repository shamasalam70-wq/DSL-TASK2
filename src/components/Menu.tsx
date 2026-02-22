import React from 'react';
import menuData from '../data/menu.json';

const Menu: React.FC = () => {
  const styles = {
    container: {
      padding: '80px 0',
      backgroundColor: 'var(--cream)',
    },
    menuGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '40px',
      marginTop: '40px',
    },
    category: {
      marginBottom: '30px',
    },
    categoryTitle: {
      fontSize: '2rem',
      marginBottom: '20px',
      color: 'var(--primary-green)',
      borderBottom: '2px solid var(--primary-green)',
      paddingBottom: '10px',
    },
    item: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: '15px',
      paddingBottom: '5px',
      borderBottom: '1px dashed var(--light-brown)',
    },
    itemName: {
      fontSize: '1.2rem',
      fontWeight: '600',
      color: 'var(--primary-brown)',
    },
    itemPrice: {
      fontSize: '1.1rem',
      fontWeight: '700',
      color: 'var(--secondary-green)',
    },
    itemDesc: {
      fontSize: '0.9rem',
      color: 'var(--text-light)',
      fontStyle: 'italic',
      marginBottom: '15px',
    }
  };

  return (
    <section id="menu" style={styles.container}>
      <div className="container">
        <h2 className="section-title">Our <span>Menu</span></h2>
        <div style={styles.menuGrid}>
          {menuData.map((category, idx) => (
            <div key={idx} style={styles.category}>
              <h3 style={styles.categoryTitle}>{category.category}</h3>
              {category.items.map((item, i) => (
                <div key={i}>
                  <div style={styles.item}>
                    <span style={styles.itemName}>{item.name}</span>
                    <span style={styles.itemPrice}>{item.price}</span>
                  </div>
                  <p style={styles.itemDesc}>{item.description}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
