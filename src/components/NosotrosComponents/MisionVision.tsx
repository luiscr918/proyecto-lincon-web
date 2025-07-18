import '../../styles/EstilosDaniel/MisionVision.css';

export const MisionVision = () => {
    return (
        <div className="mision-vision-container">
            <h2 className="seccion-titulo">MISIÓN</h2>

            <div className="mision-bloques">
                {/* Bloque 1 */}
                <div className="vision-item">
                    <img src="/src/img/portada2.png" alt="Mision1" />
                    <p>Formamos estudiantes desde una perspectiva inclusiva y humanista...</p>
                </div>

                {/* Bloque 2 */}
                <div className="vision-item">
                    <img src="/src/img/portada2.png" alt="Mision2" />
                    <p>Promovemos habilidades para el análisis y la solución de problemas...</p>
                </div>

                {/* Bloque 3 */}
                <div className="vision-item">
                    <img src="/src/img/portada2.png" alt="Mision3" />
                    <p>Educamos con responsabilidad, respeto y honestidad para una mejor sociedad...</p>
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
