import CardComponent from "../components/ExtracurricularesComponent/CardComponent"
import FondoComponent from "../components/ExtracurricularesComponent/FondoComponent"
import ImagenPruebasExtracu from "../components/ExtracurricularesComponent/ImagesPrueba"
import InicioExtraComponent from "../components/ExtracurricularesComponent/InicioComponent"
import FooterHomeComponent from "../components/FooterHomeComponent"
import Navegacion from "../components/Navegacion"
import { ScrollTransition } from "../components/ScrollAnimacionComponent"

export const Extracurriculares = () => {
    return(
        <div>
            <Navegacion/>
            <ScrollTransition>
            <InicioExtraComponent/>
            </ScrollTransition>
            <FondoComponent/>
            <ScrollTransition>
            <CardComponent/>
            </ScrollTransition>
            <ImagenPruebasExtracu/>
            <FooterHomeComponent/>
        </div>
    )
}