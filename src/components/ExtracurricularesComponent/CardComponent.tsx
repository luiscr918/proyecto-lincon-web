import "../../styles/cardExtracuStyles.css"

const cardComponent = () => {
return(
    <>
    <div className="cont">
        <div className="card-cont">
            <article className="card-article">
                <img src="https://www.advantour.com/img/japan/images/index.jpg" alt="" className="card-img"/>
                <div className="card-data">
                    <span className="card-description">
                        Primera carda
                    </span>
                    <h2 className="card-title">Titulo 1</h2>
                    <a href="#" className="card-button">Leer más</a>

                </div>
            </article>

            <article className="card-article">
                <img src="https://www.advantour.com/img/japan/images/index.jpg" alt="" className="card-img"/>
                <div className="card-data">
                    <span className="card-description">
                        Segunda carda
                    </span>
                    <h2 className="card-title">Titulo 1</h2>
                    <a href="#" className="card-button">Leer más</a>

                </div>
            </article>

            <article className="card-article">
                <img src="https://www.advantour.com/img/japan/images/index.jpg" alt="" className="card-img"/>
                <div className="card-data">
                    <span className="card-description">
                        Tercera carda
                    </span>
                    <h2 className="card-title">Titulo 1</h2>
                    <a href="#" className="card-button">Leer más</a>
                </div>
            </article>
        </div>
    </div>
    </>
)
}

export default cardComponent;