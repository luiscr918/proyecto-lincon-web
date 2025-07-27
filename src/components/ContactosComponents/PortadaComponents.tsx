import portada from '../../assets/imgs/contactos.jpg';

//imagen
import img1 from '../../assets/imgs/whatsapp.png'
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
                        padding: '20rem',
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


                    </div>
                </div>
            </div>
        </section>
    );
}
