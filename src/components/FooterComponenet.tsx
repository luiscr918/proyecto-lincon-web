import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
return(
    <footer className="bg-[#223555] text-white px-6 py-10 md:px-50 text-sm ">
        <div className="max-w-7x1 mx-auto grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            <div >
                <h3 className="text-lg font-semibold mb-7">Contáctanos</h3>
                <p className="text-[#d9b81f]">Guamaní, sector la <br />
                    Victoria calle 4A lote 189
                </p>
                    
                <p className="text-[#d9b81f] mt-7">
                    institucion@gmail.com
                </p>

                <p className="text-[#d9b81f] mt-7">
                    -099185101
                </p>

                <p className="text-[#d9b81f]">
                    -0987147390
                </p>

                <p className="text-[#d9b81f] mt-7">
                    Quito-Ecuador
                </p>
            </div>

            <div>
                <h3 className="mb-7 font-semibold text-lg">Enlaces de Interés</h3>
                <ul className="text-[#d9b81f] space-y-3">
                    <li>
                        <a href="/" >Extracurriculares</a>
                    </li>

                    <li>
                        <a href="/">Inicio de clases</a>
                    </li>

                    <li>
                        <a href="/">Uniformes</a>
                    </li>

                    <li>
                        <a href="/">Costos</a>
                    </li>
            
                </ul>
            </div>

            <div>
                <h3 className=" font-semibold text-lg  mb-7 ">Siguenos en nuestras RS</h3>
                <div className="flex space-x-6">
                <a href="#">
                <FaXTwitter color="#d9b81f " size={30}/>
                </a>

                <a href="#">
                <FaInstagram color="#d9b81f" size={30}/>
                </a>

                <a href="#">
                <FaYoutube color="#d9b81f" size={30}/>
                </a>
                
                <a href="#">
                <FaLinkedin color="#d9b81f" size={30}/>
                </a>
                </div>
            </div>
        </div >
        
            <p className="text-center text-[#8e8e93] mt-10 ">Todos los derechos reservados 2025 unidad Educativa Lincoln Larrea Benalcazar</p>
    </footer>
    );
};

export default Footer