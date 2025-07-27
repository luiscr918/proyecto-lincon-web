export const Header = () => {
  return (
    <section className="relative w-full h-[85vh] overflow-hidden ">
      {/* Imagen de fondo con efecto parallax suave */}
      <div
        className="absolute inset-0 bg-contain bg-center bg-no-repeat mt-1"
        style={{
          backgroundImage: `url(https://i.pinimg.com/originals/59/34/6b/59346b4b5c80cc5cf0c483a27dfdcb36.gif)`,
        }}
      ></div>

      {/* Contenido centrado */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 ">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">¿Quiénes somos?</h1>
        <h3 className="text-xl md:text-2xl font-semibold mb-2">
          UNIDAD EDUCATIVA PARTICULAR <br />
          <span className="italic">"LINCOLN LARREA BENALCÁZAR"</span>
        </h3>
        <p className="text-lg md:text-xl">
          EDUCACIÓN PERSONALIZADA <br />Y DE ALTA CALIDAD
        </p>
      </div>
    </section>
  );
};
