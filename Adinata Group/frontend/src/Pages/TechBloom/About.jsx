import { FaMicrochip, FaUserCog, FaLeaf } from "react-icons/fa";
import techbloom from "../../assets/Logo/techblomm.png";
import Header from "../../Layout/HeaderProducAndService";


const services = [
  {
    title: "IT Expert Outsourcing",
    description:
      "IT Expert Services is a program designed to produce experts in the IT field, specifically on programming and development.",
    icon: <FaUserCog className="text-5xl text-teal-500" />, // Ikon orang dengan roda gigi untuk keahlian IT,
    link: "#expert"
  },
  {
    title: "IT System Development",
    description:
      "IT System Development is a service designed to handle project development for clients.",
    icon: <FaMicrochip className="text-5xl text-teal-500" />, // Sesuai dengan tema warna,
    link: "#system"
  },
  {
    title: "IT Academy",
    description:
      "Techbloom IT Training Academy is a professional training institution dedicated to developing digital competencies for individuals and organizations. ",
    icon: <FaLeaf className="text-5xl text-teal-500" />, // Daun untuk melambangkan pertumbuhan akademi
    link: "#Academy"  
  },
];

const  About = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-6">


      <Header img={techbloom} title={"“Breaking Barriers with Digital Change”"} linkUnduh={`https://drive.google.com/uc?export=download&id=12xeuMTEasfkGnaMWwAQAu0hCmHOBdFYT`} desk={"Techbloom provides reliable IT digital solutions to help businesses and organizations meet their needs. We focus on delivering high-quality, easy-to-implement technology services that improve efficiency, drive growth, and support long-term success."}/>
      <div className="grid md:grid-cols-3 gap-6 mt-6 w-full max-w-4xl">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col justify-center items-center pt-7 ">
            <h4 className="text-lg font-semibold mt-4 text-primary">
              {service.title}
            </h4>
          <div
            
            className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center border-[4px] border-primary"
          >
            {service.icon}
            <div className="w-[217px] h-[226px] flex flex-col items-center justify-center">
            <p className="text-primary mt-2">{service.description}</p>
            <a href={service.link}>
            <button className="mt-4 text-teal-600 font-semibold border-b-2 border-Primary hover:text-teal-700 cursor-pointer transition-colors duration-300">
              Read More 
            </button>
            </a>
            </div>
            
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}




export default About