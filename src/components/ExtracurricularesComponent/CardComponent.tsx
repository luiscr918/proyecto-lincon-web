import "../../styles/cardExtracuStyles.css"

const cardComponent = () => {
    return (
        <>
            <div className="cont">
                <div className="card-cont">
                    <article className="card-article">
                        <img src="https://www.advantour.com/img/japan/images/index.jpg" alt="" className="card-img" />
                        <div className="card-data">
                            <h2 className="card-title">Convivencia 👥</h2>
                            <span className="card-description">
                                Promueve la armonía entre los miembros de la comunidad educativa, fortaleciendo la relación consigo mismo y con los demas.
                            </span>
                            <div className="card-button">
                            <a href="#" className="botonn"> Leer más</a>
                            </div>


                        </div>
                    </article>

                    <article className="card-article">
                        <img src="https://www.advantour.com/img/japan/images/index.jpg" alt="" className="card-img" />
                        <div className="card-data">
                            <h2 className="card-title">Eventos de saberes 🧠</h2>
                            <span className="card-description">
                                Participación en ferias, concursos y festivales que desarrollan habilidades académicas y sociales.
                            </span>
                            <div className="card-button">
                            <a href="#" className="botonn"> Leer más</a>
                            </div>

                        </div>
                    </article>

                    <article className="card-article">
                        <img src="https://www.advantour.com/img/japan/images/index.jpg" alt="" className="card-img" />
                        <div className="card-data">
                            <h2 className="card-title">Programa de Participación Estudiantil 🏫</h2>
                            <span className="card-description">
                                Espacio educativo que impulsa la innovación, ivestigación y trabajo colaborativo entre estudiantes
                            </span>
                            <div className="card-button">
                            <a href="#" className="botonn"> Leer más</a>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}

export default cardComponent;