import CardComponent from "../components/ExtracurricularesComponent/CardComponent"
import FooterHomeComponent from "../components/FooterHomeComponent"
import Navegacion from "../components/Navegacion"
import { ScrollTransition } from "../components/ScrollAnimacionComponent"

export const Extracurriculares = () => {
    return(
        <div>
            <Navegacion/>

            <ScrollTransition>
            <CardComponent/>
            </ScrollTransition>

            <FooterHomeComponent/>
        </div>
    )
}