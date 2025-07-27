import React from 'react';

import ScrollStack from '../components/Componentes de prueba/ScrollStack';
import DemoScrollStackItems from '../components/Componentes de prueba/GaleriaCards';
import FooterHomeComponent from '../components/FooterHomeComponent';
import Navegacion from '../components/Navegacion';
import Portada from '../components/ContactosComponents/PortadaComponents';
import CustomCursor from '../components/Componentes de prueba/CustomCursor';
import ContactCards from '../components/Componentes de prueba/ContactCards';
import Mapa from '../components/ContactosComponents/MapaComponents';





const Contactos2: React.FC = () => {
    return (
        <div
            style={{
                position: 'relative',
                minHeight: '100vh',
                overflowX: 'hidden',
                overflowY: 'auto',
                backgroundColor: 'transparent',
                color: 'white',
            }}
        >
            {/* Fondo animado galáctico */}
            {/* Capa principal */}
            <div style={{ position: 'relative', zIndex: 10 }}>
                <CustomCursor />
                <Navegacion />
                <Portada />

                {/* Canvas con modelo 3D */}


                {/* Sección de contacto */}
                <section
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        gap: '3rem',
                        padding: '3rem 2rem',
                        flexWrap: 'wrap',
                        color: 'white',
                        minHeight: '80vh',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '2rem',
                            maxWidth: '600px',
                            textAlign: 'center',
                        }}
                    >
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'black' }}>Contáctanos</h2>
                        <ContactCards />
                        <Mapa />
                    </div>
                </section>

                {/* Galería scroll-stack */}
                <section style={{ position: 'relative', zIndex: 10, paddingBottom: '4rem' }}>
                    <h2
                        style={{
                            fontSize: '2.5rem',
                            marginBottom: '1rem',
                            color: 'black',
                            textAlign: 'center',
                        }}
                    >
                        Preguntas Frecuentes
                    </h2>
    <ScrollStack>
      <DemoScrollStackItems />
    </ScrollStack>
                </section>

                {/* Footer */}
                <FooterHomeComponent />
            </div>
        </div>
    );
};

export default Contactos2;
