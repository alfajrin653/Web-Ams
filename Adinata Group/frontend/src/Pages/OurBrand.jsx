import Button from "../Components/Button"
import Xentra from "../assets/Logo/xentra.png"
import TechBloom from "../assets/Logo/techblomm.png"
import Zentara from "../assets/Logo/zentara.png"
import Syinergio from "../assets/Logo/synergio.png"


const OurBrand = () => {
    const DataBrand = [
        {
            name: "Xentra",
            desk: "ERP Solution",
            img: Xentra ,
            link: "https://Xentra.co.id",
        },
        {
            name: "TechBloom",
            desk: "IT Services Solutions",
            img: TechBloom ,
            link: "/techbloom",
        },
        {
            name: "Zentara",
            desk: "Finance & Banking Solution",
            img: Zentara,
            link: "/zentara",
        },
        {
            name: "Synergio",
            desk: "System Integration",
            img: Syinergio,
            link: "/synergio",
        }
    ]

    return (
        <div className="flex justify-center items-center pt-[74px] w-full px-4  bg-primary">
  <div className="max-w-6xl w-full text-center">
    <h3 className="text-3xl md:text-4xl lg:text-5xl text-blue-950 font-bold pb-8">
      Meet Our Brand
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-52">
      {DataBrand.map((Brand, index) => (
        <div key={index} className="flex flex-col justify-center items-center gap-4 p-4 bg-primary md:shadow-none md:rounded-none shadow-lg rounded-lg">
          <img src={`${Brand.img}`} alt="logo" className="w-48 h-48 " />
          <div className="flex flex-col justify-center items-center">

          <h3 className="text-2xl font-semibold text-gray-800">{Brand.name}</h3>
          <h3 className="text-gray-600 text-lg font-semibold" >{Brand.desk}</h3>
          </div>
          <Button className="rounded-full border-2 border-black bg-white font-bold w-[204px]" link={Brand.link}>More About Us</Button>
        </div>
      ))}
    </div>
  </div>
</div>

    )
}

export default OurBrand