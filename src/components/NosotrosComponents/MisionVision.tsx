import img2 from "../../assets/imgs/imagen2.jpg";
import img3 from "../../assets/imgs/imagen3.jpg";
import img4 from "../../assets/imgs/imagen4.jpg";
import img5 from "../../assets/imgs/imagen5.jpg";
import img6 from "../../assets/imgs/imagen6.jpg";
import img7 from "../../assets/imgs/imagen7.jpg";

export const MisionVision = () => {
  return (
    <div
      className="contactos-container"
      style={{
        minHeight: "100vh",
        color: "white",
      }}
    >
      <main className="px-4 py-16 max-w-7xl mx-auto">
        {/* Misión */}
        <h1 className="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight  md:text-5xl lg:text-6xl text-white">
          Misión
        </h1>

        <div className="contene-card mb-7">
          <Card
            img={img6}
            backClass="card-back1"
            texto="Promovemos el desarrollo integral de cada estudiante en un ambiente de respeto, inclusión y colaboración."
            titulo="Educación personalizada y desarrollo integral"
          />
          <Card
            img={img5}
            backClass="card-back2"
            texto="Fomentamos el pensamiento crítico y la curiosidad científica como herramientas para transformar el mundo."
            titulo="Pensamiento crítico y formación científica"
          />
          <Card
            img={img4}
            backClass="card-back3"
            texto="Formamos personas responsables, solidarias y comprometidas con su entorno social a través de valores sólidos."
            titulo="Valores y ciudadanía"
          />
        </div>

        {/* Visión */}
        <h1 className="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight  md:text-5xl lg:text-6xl text-white">
          Visión
        </h1>

        <div className="contene-card">
          <Card
            img={img3}
            backClass="card-back1"
            texto="Buscamos formar estudiantes íntegros, autónomos y líderes capaces de enfrentar los retos del futuro."
            titulo="Formación integral"
          />
          <Card
            img={img2}
            backClass="card-back2"
            texto="Garantizamos una educación inclusiva, equitativa y de calidad para todos los niños, niñas y adolescentes."
            titulo="Inclusión y cobertura"
          />
          <Card
            img={img7}
            backClass="card-back3"
            texto="Nuestros egresados destacan por su pensamiento crítico, valores y compromiso social."
            titulo="Perfil del egresado"
          />
        </div>
      </main>
    </div>
  );
};

type CardProps = {
  img: string;
  backClass: string;
  texto: string;
  titulo: string;
};

const Card = ({ img, backClass, texto, titulo }: CardProps) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={img} alt={titulo} />
        </div>
        <div className={backClass}>
          <p>{texto}</p>
        </div>
      </div>
    </div>
  );
};
