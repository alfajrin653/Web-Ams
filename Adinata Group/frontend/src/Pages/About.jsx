const About = () => {
    return (
        <>
        <div id="about" className="pt-20" ></div>
        <div  className=" grid grid-cols-1 md:grid-cols-2 gap-4 pt-[37px] px-4 pb-10 md:px-[40px]">
            <div>
                <h3 className="text-4xl md:text-5xl text-black font-semibold pb-[26px]">About us</h3>
                <h3 className="text-2xl md:text-3xl text-zinc-600 font-semibold">“4 Brands under one umbrella”</h3>
            </div>
            <div>
                <h3 className="text-lg md:text-xl text-black font-semibold">Adinata Group is a dynamic holding company uniting four specialized entities: Xentra, TechBloom, Zentara, and Synergio. Together, we deliver innovative and comprehensive solutions across the Information Technology and business transformation sectors, empowering organizations to thrive in today’s fast-paced digital landscape.</h3>
            </div>
            <div className="col-span-1 md:col-span-2"><Value/></div>
            <div className="col-span-1 md:col-span-2"><Product/></div>
        </div>
        </>
    );
};

const Value = () => {
    const DataValue = [
        { name: "Innovation", description: "Continuously strive to deliver cutting-edge solutions that anticipate and meet the evolving needs of the market." },
        { name: "Integrity", description: "Uphold honesty, transparency, and ethical practices in every aspect of the business." },
        { name: "Customer Centricity", description: "Place clients' needs and goals at the center of all decisions, providing tailored solutions and exceptional service." },
        { name: "Excellence", description: "Commit to delivering the highest quality standards in services and solutions." }
    ];

    return (
        <div>
            <h3 className="text-4xl md:text-5xl text-black font-semibold pb-[26px]">Company Value</h3>
            <div className="flex flex-col gap-4">
                {DataValue.map((value, index) => (
                    <div key={index} className={`w-full lg:w-[1100px] h-auto lg:h-[50px] p-4 flex flex-col md:flex-row items-center border-2 border-primary ${index % 2 === 1 ? "bg-primary" : "bg-white"}`}>
                        <h3 className="text-lg md:text-xl text-black font-semibold p-2">{value.name}</h3>
                        <span className={`border-r-2 h-full md:h-[47px] pr-2 ${index % 2 === 1 ? "border-white" : "border-primary"}`}></span>
                        <h3 className="text-sm md:text-base text-black font-semibold pl-2">{value.description}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Product = () => {
    const DataProduct = [
        { name: "Enterprise Resource Planning" },
        { name: "Cloud" },
        { name: "Cyber Security" },
        { name: "Outsourcing IT Experts" },
        { name: "Finance and Banking Core System" }
    ];

    return (
        <div>
            <h3 className="text-4xl md:text-5xl text-black font-semibold pb-[26px]">Top 5 Products and Services</h3>
            <div className="flex flex-col md:flex-row gap-4">
                {DataProduct.map((product, index) => (
                    <div key={index} className="flex border-2 border-primary h-auto md:h-[140px] w-full md:w-[169px] justify-center items-center p-4">
                        <h5 className="text-lg md:text-xl text-black font-semibold text-center">{product.name}</h5>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
