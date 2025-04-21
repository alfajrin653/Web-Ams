import DownloadCompro from '../Components/DownloadCrompro';
import WhatsappButton from '../Components/WhatsappButton';
import HeroSection from '../Layout/HeroSection';
import Navbar from '../Layout/Navbar';
import About from './About';
// import ContactForm from './ContactForm';
import ContactSection from './Contact1';
import Footer from '../Layout/Footer';
import OurBrand from './OurBrand';
import OurClient from './OurClient';

const Home = () => {

    return (
        <>
        <Navbar/>
        <HeroSection/>
        <About/>
        <OurBrand/>
        <OurClient/>
        {/* <ContactForm/> */}
        <ContactSection/>
        <Footer/>
        <WhatsappButton message={'Halo, saya tertarik dengan product Adinata Group !'} />
        <DownloadCompro linkUnduh={'https://drive.google.com/uc?export=download&id=1-c5pMAvCnMux74q4tXn0twxF4_BG3re_'}/>
        
        </>
    )
}

export default Home;