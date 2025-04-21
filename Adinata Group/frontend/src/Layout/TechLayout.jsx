// import LeftSection from "./LeftSection";
import RightSection from "../Components/TechBloom/RightSection";
import LeftSection from "../Components/TechBloom/LeftSection";
const TechLayout = ({ leftContent, rightContent }) => {
    return (
    


    <div className="min-h-screen flex flex-col md:flex-row bg-teal-700 p-6 pb-20">
      <LeftSection {...leftContent} />
      {rightContent && <RightSection {...rightContent} />}
    </div>


 
    )
}

export default TechLayout