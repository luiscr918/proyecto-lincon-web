import { useState, useEffect } from "react";
import FooterHomeComponent from "../components/FooterHomeComponent";
import Navegacion from "../components/Navegacion";
import "../styles/EstilosDaniel/Inscripciones.css";
import { doc, getDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase/Config";

interface FechasImportantes {
  fecha_inicio_clases: Timestamp;
  fecha_inicio_matriculas: Timestamp;
  fecha_limite_matriculas: Timestamp;
}

export const Inscripciones = () => {
  const [dateTime, setDateTime] = useState<Date>(new Date());
  const [fechas, setFechas] = useState<FechasImportantes | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const cargarFechas = async () => {
    const docRef = doc(db, "fechas", "fechas_importantes");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data() as FechasImportantes;
      setFechas(data);
    } else {
      console.log("No such document!");
    }
  };

  useEffect(() => {
    cargarFechas();
  }, []);

  return (
    <div className="inscripciones-container">
      <Navegacion />
      <section className="inscripciones-content">
        <div className="inscripcion-header">
          <h1 className="insc-title">Inscripciones 2025</h1>
          <p className="insc-sub-title">
            ¡Bienvenido! Aquí puedes ver las fechas importantes de las
            inscripciones para el próximo ciclo escolar.
          </p>
        </div>

        <div className="dates-info">
          <div className="insc-box">
            <h3 className="insc-title-box">
              Fecha de Inicio de Matrículas:
            </h3>
            <div className="insc-date">
              <p className="date-value">
                {fechas
                  ? new Date(
                      fechas.fecha_inicio_matriculas.seconds * 1000
                    ).toLocaleDateString("es-EC", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })
                  : "Cargando..."}
              </p>
            </div>
          </div>

          <div className="insc-box">
            <h3 className="insc-title-box">Fecha Limite de Matrículas:</h3>
            <div className="insc-date">
              <p className="date-value">
                {fechas
                  ? new Date(
                      fechas.fecha_limite_matriculas.seconds * 1000
                    ).toLocaleDateString("es-EC", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })
                  : "Cargando..."}
              </p>
            </div>
          </div>

          <div className="insc-box">
            <h3 className="insc-title-box">Fecha de Inicio de Clases:</h3>
            <div className="insc-date">
              <p className="date-value">
                {fechas
                  ? new Date(
                      fechas.fecha_inicio_clases.seconds * 1000
                    ).toLocaleDateString("es-EC", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })
                  : "Cargando..."}
              </p>
            </div>
          </div>
        </div>

        <div className="countdown-container">
          <div className="countdown-title">
            <h3>Contando los días para el inicio</h3>
          </div>
          <div className="countdown-timer">
            <p className="countdown">{dateTime.toLocaleDateString()}</p>
            <p className="countdown">{dateTime.toLocaleTimeString()}</p>
          </div>
        </div>

        <div className="insc-description">
          <p>
            Para más detalles, por favor, visita nuestra oficina o contáctanos a
            través de los canales oficiales. ¡Te esperamos con muchas sorpresas
            para este año escolar!
          </p>
        </div>

        {/* Botón flotante de acción */}
        <a href="#contacto" className="cta-button">
          ¡Inscríbete ahora!
        </a>
      </section>

      <FooterHomeComponent />
    </div>
  );
};
