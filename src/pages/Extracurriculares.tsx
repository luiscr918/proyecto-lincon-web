import CardComponent from "../components/ExtracurricularesComponent/CardComponent"
import InicioExtraComponent from "../components/ExtracurricularesComponent/InicioComponent"
import FooterHomeComponent from "../components/FooterHomeComponent"
import Navegacion from "../components/Navegacion"
import { ScrollTransition } from "../components/ScrollAnimacionComponent"

export const Extracurriculares = () => {
    return(
        <div>
            <Navegacion/>
            <InicioExtraComponent/>
            <ScrollTransition>
            <CardComponent/>
            </ScrollTransition>

            <FooterHomeComponent/>
        </div>
    )
}