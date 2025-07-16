
import "../styles/botonprueba.css"

const BotonPrueba=()=>{
    return(
        <div className="body">
          <div className="contenedor-flotante">
            <div className="boton-flotante">+</div>
            <div className="contenedor-elemento">
                <span className="elemento-flotante">
                    <i className="material-icons">phone</i>
                </span>
                <span className="elemento-flotante">
                    <i className="material-icons">email</i>
                </span>
                <span className="elemento-flotante">
                    <i className="material-icons">chat</i>
                </span>
                
            </div>
            </div>  
        </div>
    )
}

export default BotonPrueba