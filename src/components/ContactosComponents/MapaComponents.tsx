export default function Mapa() {
  return (
    <div style={{ minWidth: 320, flex: 1, maxWidth: 650 }}>
      <div
        className="mapa"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "1.5rem",
        }}
      >
        <iframe
          title="Ubicación"
          src="https://www.google.com/maps/embed?pb=!4v1752993221610!6m8!1m7!1sqlL-xY_9mn5G9QShm95u4g!2m2!1d-0.3467524117009872!2d-78.55514884015899!3f184.5776837214721!4f18.88408959760298!5f0.7820865974627469"
          width="100%"
          allow="accelerometer; gyroscope; magnetometer"
          height="350"
          style={{ border: 0, borderRadius: "8px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="ubicacion" style={{ textAlign: "center", color: "#fff" }}>
        <h3>Ubícanos Fácilmente</h3>
        <p>Encuentra nuestra institución en el mapa y visítanos.</p>
<a
  className="btn-ubicacion"
  href="https://maps.app.goo.gl/ahLsroQYRgJmSGqU8"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    background: "linear-gradient(135deg, #00c9ff 0%, #92fe9d 100%)",
    color: "#051d37",
    padding: "0.75rem 2rem",
    borderRadius: "12px",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "1rem",
    display: "inline-block",
    marginTop: "1.5rem",
    boxShadow: "0 8px 20px rgba(0, 201, 255, 0.3)",
    transition: "all 0.3s ease-in-out",
    textAlign: "center",
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = "scale(1.05)";
    e.currentTarget.style.boxShadow = "0 12px 30px rgba(0, 201, 255, 0.5)";
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 201, 255, 0.3)";
  }}
>
  🚀 IR A UBICACIÓN
</a>

      </div>
    </div>
  );
}
