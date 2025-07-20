import portada from '../../img/contactos.jpg';

export default function Portada() {
    return (
        <section className="contacto-hero">
            <div className="contacto-hero-contenido">
                <div
                    className="overlay"
                    style={{
                        backgroundImage: `url(${portada})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderRadius: '20px',
                        padding: '10rem',
                        color: '#fff',
                        position: 'relative',
                        animation: 'fadeIn 1.5s ease-out'
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            top: 0, left: 0, right: 0, bottom: 0,
                            background: 'rgba(0,0,0,0.5)',
                            borderRadius: '16px',
                            zIndex: 1
                        }}
                    />
                    <div style={{ position: 'relative', zIndex: 2 }}>
                        <h1 className="titulo" style={{ animation: 'slideUp 1s ease-out' }}>
                            ¿Contactanos?
                        </h1>
                        <p>¿Tienes preguntas? Estamos listos para ayudarte.</p>
                        <a
                            href="https://wa.me/593987654321"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="boton-wsp"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                                animation: 'pulse 2s infinite'
                            }}
                        >
                            <img src="/src/img/whatsapp.png" alt="WhatsApp" width={32} height={32} />
                            Haz una pregunta
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
