// src/components/ContactCards.tsx
import React from 'react';

const ContactCards: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '1.5rem',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      {/* Tarjeta Email */}
      <div
        className="contact-card cursor-target"
        style={{
          width: '140px',
          height: '120px',
          backgroundColor: '#007bff',
          color: 'white',
          borderRadius: '12px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 15px rgba(0,123,255,0.3)',
          border: '2px solid #0056b3',
        }}
      >
        <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>📧</div>
        <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Email</div>
<a
  href="mailto:uelinconlarrea@gmail.com"
  style={{
    display: 'inline-block',
    fontSize: '11px',
    opacity: 0.8,
    textAlign: 'center',
    padding: '0.5rem 1rem',
    color: 'white',
    borderRadius: '8px',
    textDecoration: 'none',
    cursor: 'pointer',
    marginTop: '0.5rem',
  }}
>
  uelinconlarrea@gmail.com
</a>

      </div>

      {/* Tarjeta WhatsApp */}
      <div
        className="contact-card cursor-target"
        style={{
          width: '140px',
          height: '120px',
          backgroundColor: '#25d366',
          color: 'white',
          borderRadius: '12px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 15px rgba(37,211,102,0.3)',
          border: '2px solid #1da851',
        }}
        onClick={() => window.open('https://wa.me/593983924043?text=Hola%2C%20quiero%20más%20información%20acerca%20de%20las%20matrículas', '_blank')}
      >
        <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>📱</div>
        <div style={{ fontSize: '14px', fontWeight: 'bold' }}>WhatsApp</div>
        <div style={{ fontSize: '11px', opacity: 0.8 }}>Chatea ahora</div>
      </div>

      {/* Tarjeta Teléfono */}
      <div
        className="contact-card cursor-target"
        style={{
          width: '140px',
          height: '120px',
          backgroundColor: '#dc3545',
          color: 'white',
          borderRadius: '12px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 15px rgba(220,53,69,0.3)',
          border: '2px solid #c82333',
        }}
      >
        <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>📞</div>
        <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Teléfono</div>
<a
  href="tel:0987147390"
  style={{
    display: 'inline-block',
    fontSize: '11px',
    opacity: 0.8,
    textAlign: 'center',
    padding: '0.5rem 1rem',
    
    color: 'white',
    borderRadius: '8px',
    textDecoration: 'none',
    cursor: 'pointer',
    marginTop: '1rem',
  }}
>
   Llamar al 0987147390
</a>

      </div>
    </div>
  );
};

export default ContactCards;
