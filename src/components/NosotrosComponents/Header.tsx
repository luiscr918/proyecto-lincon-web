
import '../../styles/EstilosDaniel/QuienesSomos.css'
//Imagenes
import imagen1 from '../../assets/imgs/Portada2.png'
export const Header = () => {
    return (
        <div className="quienes-container">
            <img src={imagen1} alt="Portada" className="img-fondo" />
            <div className="overlay">
                <h1 className="titulo">¿Quiénes somos?</h1>
                <h3 className="subtitulo">
                    UNIDAD EDUCATIVA PARTICULAR<br />"LINCON LARREA BENALCÁZAR"
                </h3>
                <p className="descripcion">
                    EDUCACIÓN PERSONALIZADA<br />Y DE ALTA CALIDAD
                </p>
            </div>
        </div>
    )
}
