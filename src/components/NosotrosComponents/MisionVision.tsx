
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
            img="https://i.postimg.cc/02Ngch4w/cs1.jpg"
            
            backClass="card-back1"
            texto="Promovemos el desarrollo integral de cada estudiante en un ambiente de respeto, inclusión y colaboración."
            titulo="Educación personalizada y desarrollo integral"
          />
          <Card
            img="https://i.postimg.cc/ZqSVDdqM/cs3.jpg"
            backClass="card-back2"
            texto="Fomentamos el pensamiento crítico y la curiosidad científica como herramientas para transformar el mundo."
            titulo="Pensamiento crítico y formación científica"
          />
          <Card
            img="https://i.postimg.cc/0jcT9Czj/cs.jpg"
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
            img="https://i.postimg.cc/k5HvyBB2/cs4.jpg"
            backClass="card-back1"
            texto="Buscamos formar estudiantes íntegros, autónomos y líderes capaces de enfrentar los retos del futuro."
            titulo="Formación integral"
          />
          <Card
            img="https://i.postimg.cc/ZKmFjkKx/cs5.jpg"
            backClass="card-back2"
            texto="Garantizamos una educación inclusiva, equitativa y de calidad para todos los niños, niñas y adolescentes."
            titulo="Inclusión y cobertura"
          />
          <Card
            img="https://i.postimg.cc/fWf0zVDY/cs6.jpg"
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
