import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin, Navigation, Car } from 'lucide-react';

// Fix for default marker icon
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const Location: React.FC = () => {
  const position: [number, number] = [40.730610, -73.935242]; // Sample coordinates (NYC)

  const styles = {
    section: {
      padding: '80px 0',
      backgroundColor: 'white',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '50px',
      alignItems: 'center',
    },
    mapContainer: {
      height: '400px',
      borderRadius: '15px',
      overflow: 'hidden',
      boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
      border: '4px solid var(--secondary-brown)',
    },
    infoContainer: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '30px',
    },
    infoItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '15px',
    },
    icon: {
      color: 'var(--primary-green)',
      flexShrink: 0,
    },
    infoTitle: {
      fontSize: '1.2rem',
      fontWeight: '600',
      marginBottom: '5px',
      color: 'var(--primary-brown)',
    },
    infoText: {
      color: 'var(--text-light)',
    }
  };

  return (
    <section id="location" style={styles.section}>
      <div className="container">
        <h2 className="section-title">Find <span>Us</span></h2>
        <div className="location-grid" style={styles.grid}>
          <div style={styles.mapContainer}>
            <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                  <b>Java Buzz</b> <br /> 123 Coffee Street, NYC
                </Popup>
              </Marker>
            </MapContainer>
          </div>

          <div style={styles.infoContainer}>
            <div style={styles.infoItem}>
              <MapPin style={styles.icon} size={28} />
              <div>
                <h3 style={styles.infoTitle}>Address</h3>
                <p style={styles.infoText}>123 Coffee Street, Caffeine District<br />New York, NY 10001</p>
              </div>
            </div>

            <div style={styles.infoItem}>
              <Navigation style={styles.icon} size={28} />
              <div>
                <h3 style={styles.infoTitle}>Directions</h3>
                <p style={styles.infoText}>Located just two blocks from the Grand Central Station. Look for the large coffee cup sign!</p>
              </div>
            </div>

            <div style={styles.infoItem}>
              <Car style={styles.icon} size={28} />
              <div>
                <h3 style={styles.infoTitle}>Parking Information</h3>
                <p style={styles.infoText}>Validated parking available at the "Java Garage" right across the street. Street parking is also available after 6 PM.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .location-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Location;
