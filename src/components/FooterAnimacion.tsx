
import "../styles/styles.css";

const FooterAnimado = () => {
    return (
        <div className="body">
        <div className="footer">
            <div className="olas">
                <div className="ola" id="ola"></div>
                <div className="ola" id="ola"></div>
                <div className="ola" id="ola"></div>
                <div className="ola" id="ola"></div>
            </div>  
            <div className="row">
                <div className="col">
                    <ul>
                        <li>
                            <div className="logo">
                                <a href="">Logo</a>
                            </div>
                        </li>
                        <li>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum tenetur minus, eaque, earum aut voluptatum consectetur aspernatur natus expedita nemo voluptates numquam sit officiis perspiciatis, veritatis cupiditate incidunt maiores sint!z</p>
                        </li>
                    </ul>
                </div>
                <div className="col">
                    <ul>
                        <li> <a href="#">Extracurriculares</a></li>
                        <li><a href="#">Inicio de clases</a></li>
                        <li> <a href="#">Uniformes</a></li>
                        <li> <a href="#">costos</a></li>

                    </ul>
                </div>
                <div className="col">
                    <ul>
                        <li>-099185101</li>
                        <li>-0987147390</li>
                        <li>Guamaní, sector la <br />
                            Victoria calle 4A lote 189</li>
                        <li>institucion@gmail.com</li>
                    </ul>
                </div>

                <div className="sociales">
                    <ul>
                        <li><i className="fa-brands fa-facebook-f"></i></li>
                        <li><i className="fa-brands fa-x-twitter"></i></li>
                        <li><i className="fa-brands fa-linkedin-in"></i></li>
                        <li><i className="fa-brands fa-instagram"></i></li>
                        
                    </ul>
                </div>
            </div>
            <p>Todos los derechos reservados 2025 unidad Educativa Lincoln Larrea Benalcazar</p>
        </div>
        </div>
    )
}

export default FooterAnimado;