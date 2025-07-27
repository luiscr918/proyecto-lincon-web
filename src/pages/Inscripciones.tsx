import { useState, useEffect } from "react";
import FooterHomeComponent from "../components/FooterHomeComponent";
import Navegacion from "../components/Navegacion";
import "../styles/EstilosDaniel/Inscripciones.css";
import { doc, getDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase/Config";
import BotonFlotante from "../components/BotonFlotanteComponent";
import { FloatingSocialBar } from "../components/FloatingSocialBar";
import imagenRegreso from "../assets/imgs/imagen-regreso-clases.png";
interface FechasImportantes {
  fecha_inicio_clases: Timestamp;
  fecha_inicio_matriculas: Timestamp;
  fecha_limite_matriculas: Timestamp;
}

export const Inscripciones = () => {
  const [dateTime, setDateTime] = useState<Date>(new Date());
  const [fechas, setFechas] = useState<FechasImportantes | null>(null);
  void dateTime;
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
    <>
      <div className="inscripciones-container">
        <Navegacion />
        <section className="inscripciones-content">
          <div className="inscripcion-header">
            <h1 className="insc-title">Inscripciones 2025</h1>
            <div className="flex justify-center">
              <figure className="max-w-sm ">
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={imagenRegreso}
                  alt="image description"
                />
              </figure>
            </div>
            <p className="insc-sub-title m-5">
              ¡Bienvenido! Aquí puedes ver las fechas importantes de las
              inscripciones para el próximo ciclo escolar.
            </p>
          </div>
          <div className="dates-info">
            <div className="insc-box">
              <h3 className="insc-title-box">Fecha de Inicio de Matrículas:</h3>
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

          {fechas && (
            <div className="countdown-container m-5">
              <div className="countdown-title">
                <h3>Días restantes para el próximo inicio de clases:</h3>
              </div>
              <div className="countdown-timer">
                {(() => {
                  const fechaInicio = new Date(
                    fechas.fecha_inicio_clases.seconds * 1000
                  );
                  const hoy = new Date();

                  // Limpiar horas para comparar por día
                  const inicioSinHora = new Date(
                    fechaInicio.getFullYear(),
                    fechaInicio.getMonth(),
                    fechaInicio.getDate()
                  );
                  const hoySinHora = new Date(
                    hoy.getFullYear(),
                    hoy.getMonth(),
                    hoy.getDate()
                  );

                  const diffTime =
                    inicioSinHora.getTime() - hoySinHora.getTime();
                  const diasRestantes = Math.ceil(
                    diffTime / (1000 * 60 * 60 * 24)
                  );

                  if (diasRestantes > 0) {
                    return (
                      <p className="countdown">
                        Faltan{" "}
                        <strong className="font-bold">{diasRestantes}</strong>{" "}
                        {diasRestantes === 1 ? "día" : "días"} para el inicio de
                        clases.
                      </p>
                    );
                  } else {
                    return (
                      <p className="countdown">¡Las clases ya han comenzado!</p>
                    );
                  }
                })()}
              </div>
            </div>
          )}
        </section>
      </div>
      <FloatingSocialBar />
      <BotonFlotante />
      <FooterHomeComponent />
    </>
  );
};
