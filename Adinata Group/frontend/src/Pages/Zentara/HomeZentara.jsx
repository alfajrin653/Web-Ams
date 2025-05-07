import React from 'react'
import HeaderProductAndService from '../../Layout/HeaderProducAndService'
import Zentara from '../../assets/Logo/zentara.png'
import Navbar from '../../Layout/Navbar'
import Card from '../../Components/Card'
import WhatsappButton from '../../Components/WhatsappButton'
import DownloadCompro from '../../Components/DownloadCrompro'
const HomeZentara = () => {
  return (
    <>
    <Navbar />
    <div className='min-h-screen bg-gray-50 flex flex-col items-center py-12 px-6 '>
      <HeaderProductAndService linkUnduh={'https://drive.google.com/uc?export=download&id=1IEgkNa3x1P8Y5jQ_YVOh33fLtTjVbpsr'} img={Zentara} title="“Empowering Finance with Innovation”" desk="Zentara offers innovative technology solutions for the financial sector and integrated systems. We are committed to supporting the growth of Indonesia's financial industry by providing services that include consultation, management, and implementation of secure and efficient systems." />
   <div className=''>
    <div className=' items-center grid grid-cols-1 grid-rows-8 xs:grid-cols-2 xs:grid-rows-4 md:grid-rows-2   md:grid-cols-4'>

   
   {DataCard.map((item, index) =>
     <div key={index} className='pt-4 px-1.5 py-1.5  w-full  justify-center items-center'> 
    {/* <Card  className={`h-[266px] w-[185px] border-primary border-4 flex flex-col justify-between items-center`}  title={item.title} desk={item.desk} />  */}

    <div className={` scale-105 xs:scale-100  flex flex-col justify-center items-center text-center border-4 border-primary h-[286px] w-[195px] p-2`}>
      <div>

      <h3 className={`text-[20px] font-bold text-primary pb-[5px]`}>
        {item.title}
      </h3>
      </div>
      <p className='text-[11px] w-full'>
        {item.desk}
      </p>
      </div>
    </div>)}
    </div>
   </div>   
    </div>
    <WhatsappButton message={'Halo, saya tertarik dengan product Zentara!'}/>
        {/* <DownloadCompro linkUnduh={'https://drive.google.com/uc?export=download&id=1q0EFMq3onj3ogAo7v3EO_7Rlk591tY_U'}/> */}
    </>
  )
}


const DataCard =[
  {
  title: "Payment and API",
  desk: "We provide integrated software solutions for processing and authorizing financial transactions across multiple channels. Through our API, our system facilitates digital payments, enabling UMKM to adopt cashless payment methods efficiently and in real time."
},
  {
  title: "Risk and Compliance",
  desk: "We provide comprehensive solutions to strengthen your company's security, aligning with the latest technological advancements and proactively addressing potential risks. Our approach ensures secure and dependable business operations for the future."
},
  {
  title: "Core System and Surrounding/ Supporting",
  desk: "We partner with leading global providers to offer integrated solutions tailored to the banking and finance industries. With end-to-end services and proactive monitoring, we guarantee smooth system performance, ensuring your business operates at its best."
},
  {
  title: "One Platform Reporting",
  desk: "Organizing and standardizing reports for banks and financial service companies to ensure compliance with regulatory requirements."
},
  {
  title: "OneFCC (Financial Crime & Compliance)",
  desk: "Facilitates the prevention of money laundering, compliance reporting, and management, while providing fraud prevention solutions for banks and financial service companies."
},
  {
  title: "One Platform Risk Solution",
  desk: "Mitigates risks in banks and financial service companies by offering tools for self-assessment and control."
},
  {
  title: "Credit Management System",
  desk: "Responsible for overseeing and managing the company's assets and credit portfolio, ensuring optimal performance, risk management, and strategic alignment with business goals."
},
  {
  title: "Business Process Service",
  desk: "Dedicated to streamlining and simplifying various business processes, enhancing efficiency, and driving overall organizational performance."
},

]


const Cards = ({ title, desk,}) => {
  return (
    <div className={`flex flex-col justify-center items-center text-center border-2 border-primary h-[266px] w-[180px] p-2.5`}>
    <h3 className={`text-[20px] font-bold text-primary  pb-[5px]`}>
      {title}
    </h3>
    <p className='text-[11px] w-full'>
      {desk}
    </p>
  </div>
  )
}


export default HomeZentara;
