export const Header = () => {
  return (
    <section className="relative w-full h-auto overflow-hidden ">
      {/* Contenido centrado */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 ">
        <h1 className="mb-4 text-6xlxl font-extrabold leading-none tracking-tight  md:text-5xl lg:text-6xl ">
          ¿Quiénes somos?
        </h1>
        <br />
        <h2 className="text-5xl font-semibold">
          UNIDAD EDUCATIVA PARTICULAR
          <br />
          <span className="text-transparent text-4xl bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            "LINCOLN LARREA BENALCÁZAR"
          </span>{" "}
        </h2>
        <br />
        <h2 className="text-3xl font-normal">
          EDUCACIÓN PERSONALIZADA <br />Y DE ALTA CALIDAD
        </h2>
      </div>
    </section>
  );
};
