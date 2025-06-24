import About from "./About"
import ExpertsPosition from "./ExpertsPosition"
import SystemDevelopment from "./SystemDevelopment"
import Training from "./Training"
import Navbar from "../../Layout/Navbar"
import DownloadCompro from "../../Components/DownloadCrompro"
import WhatsappButton from "../../Components/WhatsappButton"

const HomeTech = () => {
    return (
        <>
        <Navbar/>
        <About/>
        <ExpertsPosition/>
        <SystemDevelopment/>
        <Training/> 
        <WhatsappButton message={'Halo, saya tertarik dengan product TechBloom!'}/>
        {/* <DownloadCompro linkUnduh={`https://drive.google.com/uc?export=download&id=1-Rqh-Nenxv34nr32zBEgfK81qC78brU7` } /> */}
        
        </>
    )
}

export default HomeTech 