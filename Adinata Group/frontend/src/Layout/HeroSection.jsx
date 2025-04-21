import Button from "../Components/Button";
import bgHero from "../assets/bgHero.png";

const HeroSection = () => {
    return (
       
        <div 
            className="flex flex-col justify-center items-center w-full min-h-screen bg-no-repeat bg-cover bg-center p-40 "
            style={{ backgroundImage: `url(${bgHero})` }}
        >
            <div className="flex justify-start flex-col md:pb-70 scale-60 md:scale-85 lg:scale-100">
            <h1 className="text-6xl font-bold text-white pb-[35px]">ADINATA GROUP</h1>
            <h1 className="text-6xl font-bold text-white">“Empowering Business, Transforming the Future”</h1>
            </div>
            <Button link="/#about">Read More</Button>
        </div>
        
    );
};

export default HeroSection;
