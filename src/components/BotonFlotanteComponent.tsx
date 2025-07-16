
import "../styles/botonStyles.css";


const BotonFlotante = () => {
    return (
        <>
            <div className="contenedor">
                <input type="checkbox" id="btn-mas" />
                <div className="redes">
                    <a href="" className="fa-brands fa-facebook-f"></a>
                    <a href="" className="fa-brands fa-whatsapp"></a>
                </div>
                <div className="btn-mas">
                    <label htmlFor="btn-mas" className="fa-solid fa-message" id="btn"></label>
                </div>
            </div>
        </>

    )
}

export default BotonFlotante;