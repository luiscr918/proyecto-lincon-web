export default function ContactoInfo() {
    return (
        <div style={{ minWidth: 320, flex: 1, maxWidth: 400 }}>
            <div className="contacto-info">
                <h2 style={{ color: '#fff' }}>Contactos</h2>
                <div
                    className="datos"
                    style={{
                        textAlign: 'left',
                        padding: '20px',
                        backgroundColor: '#f9f9f9',
                        borderRadius: '8px',
                        maxWidth: '350px',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                    }}
                >
                    <p><strong>INFORMACIÓN DE CONTACTO</strong></p>
                    <p>📧 institucion@gmail.com</p>
                    <p>📞 +593 99 554 1234</p>
                    <p>📱 +593 98 456 7890</p>
                    <p>☎️ 02 2896 123</p>
                    <p>📍 Guayas, sector La Victoria calle 4ta lote numero #10</p>
                </div>
            </div>
        </div>
    );
}