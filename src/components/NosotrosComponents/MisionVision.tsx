import '../../styles/EstilosDaniel/MisionVision.css';

export const MisionVision = () => {
    return (
        <div className="mision-vision-container">
            <h2 className="seccion-titulo">MISIÓN</h2>

            <div className="mision-bloques">
                {/* Bloque 1 */}
                <div className="bloque">
                    <div className="bloque-content">
                        <div className="bloque-texto izquierda">
                            <h3>Educación personalizada y desarrollo integral</h3>
                            <p>Formamos estudiantes desde una perspectiva inclusiva y humanista...</p>
                        </div>
                        <div className="bloque-img">
                            <img src="/src/img/portada2.png" alt="Ilustracion1" />
                        </div>
                    </div>
                </div>

                {/* Bloque 2 */}
                <div className="bloque">
                    <div className="bloque-content">
                        <div className="bloque-texto derecha">
                            <h3>Pensamiento crítico y formación científica</h3>
                            <p>Promovemos habilidades para el análisis y la solución de problemas...</p>
                        </div>
                        <div className="bloque-img">
                            <img src="/src/img/portada2.png" alt="Ilustracion2" />
                        </div>
                    </div>
                </div>

                {/* Bloque 3 */}
                <div className="bloque">
                    <div className="bloque-content">
                        <div className="bloque-texto izquierda">
                            <h3>Valores y ciudadanía</h3>
                            <p>Educamos con responsabilidad, respeto y honestidad para una mejor sociedad...</p>
                        </div>
                        <div className="bloque-img">
                            <img src="/src/img/portada2.png" alt="Ilustracion3" />
                        </div>
                    </div>
                </div>
            </div>

            <h2 className="seccion-titulo">VISIÓN</h2>

            <div className="vision-bloques">
                {/* Bloque 1 */}
                <div className="vision-item">
                    <img src="/src/img/portada2.png" alt="Futuro1" />
                    <p>Formación integral con liderazgo y autonomía</p>
                </div>

                {/* Bloque 2 */}
                <div className="vision-item">
                    <img src="/src/img/portada2.png" alt="Futuro2" />
                    <p>Inclusión y cultura democrática en el aula</p>
                </div>

                {/* Bloque 3 */}
                <div className="vision-item">
                    <img src="/src/img/portada2.png" alt="Futuro3" />
                    <p>Perfil del egresado con pensamiento crítico y valores</p>
                </div>
            </div>
        </div>
    );
};
