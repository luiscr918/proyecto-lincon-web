import CardComponent from "../components/ExtracurricularesComponent/CardComponent"
import InfoScrollExtracurri from "../components/ExtracurricularesComponent/InfoScrollExtracurri"
import InicioExtraComponent from "../components/ExtracurricularesComponent/InicioComponent"
import FooterHomeComponent from "../components/FooterHomeComponent"
import Navegacion from '../components/Navegacion';
import { ScrollTransition } from "../components/ScrollAnimacionComponent"

export const Extracurriculares = () => {
    return(
        <div>
            <Navegacion/>
            
            <ScrollTransition>
            <InfoScrollExtracurri/>
            </ScrollTransition>

            <ScrollTransition>
            <InicioExtraComponent/>
            </ScrollTransition>

            <ScrollTransition>
            <CardComponent/>
            </ScrollTransition>

            <FooterHomeComponent/>
        </div>
    )
}