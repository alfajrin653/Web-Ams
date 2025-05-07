import React from 'react'
import Navbar from '../../Layout/Navbar'
import HeaderProductAndService from '../../Layout/HeaderProducAndService'
import Synergio from '../../assets/Logo/synergio.png'
import Card from '../../Components/Card'
import WhatsappButton from '../../Components/WhatsappButton'
import DownloadCompro from '../../Components/DownloadCrompro'

const HomeSynergio = () => {
  return (
    <>
    <Navbar/> 
    <div className='min-h-screen bg-gray-50 flex flex-col items-center py-12 px-6'>
    <HeaderProductAndService img={Synergio} linkUnduh={'https://drive.google.com/uc?export=download&id=1WPP0zICya5zExZ61AfqV2yGoYRsmwLXP'} title="“From our modest start, we've rapidly become a trusted IT solutions provider, empowering businesses with innovative technology”" desk="Synergio provides reliable IT solutions for businesses of all sizes, helping them optimize operations and achieve their goals. Our expertise spans IT infrastructure, secure data management, and application development, designed to adapt to the changing demands of modern industries. With a focus on flexibility and innovation, we deliver services that drive efficiency and growth." />
    <div className="scroll-container overflow-x-scroll max-w-[980px] md:h-[980px] h-[610px] gap-2">
  <div
    className="grid md:auto-cols-max md:gap-x-14 gap-4   md:scale-100 md:pt-10 md:grid-rows-3 md:grid-cols-6 md:grid-cols-max xs:grid-cols-2 xs:grid-rows-10 grid-cols-1 grid-rows-20 md:min-w-[1260px] h-auto"
    style={{ display: 'grid', gridAutoFlow: 'column', minWidth: '' }}
  >
    {DataCard.map((item, index) => (
      <div key={index}>
        <Card
          title={item.title}
          isi={item.isi}
          className="rounded-2xl border-black"
          textColor="black"
        />
      </div>
    ))}
  </div>
</div>

    </div>
      <WhatsappButton message={'Halo, saya tertarik dengan product Synergio'}/>
      

    </>
  )
}

const DataCard = [
    {
    title:"IT Infrastructure Innovation",
    isi:"IT infrastructure serves as the backbone of any organization. A well-planned and well-executed IT infrastructure increases operational efficiency and helps achieve business objectives. Planning, implementing, and managing IT infrastructure requires expertise and experience in key products or solutions such as computing solutions, storage solutions, hybrid computing, personal storage cloud solutions, and dge computing solutions. The ability to seamlessly integrate and manage these components is crucial to maintaining a robust infrastructure that supports both current and future business needs."
},
    {
    title:"Business Continuity & Data Security Solutions",
    isi:"Data is essential for business functions across industries, regardless of company size. Today, data drives transactions, communications, and other critical functions. When an organization chooses to protect its data, the focus should be on safeguarding the most crucial data and applications that ensure business continuity. By developing a robust data protection strategy, businesses can minimize risks associated with downtime and security breaches while ensuring the resilience of their core operations."
},
    {
    title:"SmartCore Data Center",
    isi:"Data is essential for business functions across industries, regardless of company size. Today, data drives transactions, communications, and other critical functions. When an organization chooses to protect its data, the focus should be on safeguarding the most crucial data and applications that ensure business continuity. By developing a robust data protection strategy, businesses can minimize risks associated with downtime and security breaches while ensuring the resilience of their core operations."
},
    {
    title:"TechCare Solutions",
    isi:"Techcare solutions enable businesses to stay connected with their clients and services by providing IT support that suits their specific needs. Not all companies require comprehensive, proactive IT service plans, but Techcare ensures that businesses maintain seamless operations with up-to-date technology solutions integrated into their overall business strategy. This solution helps organizations reduce risks, increase agility, and stay focused on their core business operations while benefiting from the latest technological advancements."
},    
    {
    title:"Smart Workspace Solution",
    isi:"The implementation of Digital Workplaces creates an environment conducive to better communication, faster collaboration, and increased innovation across an organization. Our team helps businesses efficiently transition their IT operations by focusing on business outcomes. By adopting a smart workspace approach, companies can empower their employees to work flexibly and productively, from any device and location. This solution optimizes office space, improves work-from-home capabilities, and saves time through powerful analytics."
},
    {
    title:"Business Operation Application",
    isi:"As IT infrastructure becomes more complex, the need for efficient management tools grows. Business Workflow Applications enable companies to better manage and operate their IT systems by providing support in areas where challenges and risks might arise. These applications simplify and streamline processes, reducing complexity and minimizing operational issues while ensuring smooth day-to-day business operations."
},
    {
    title:"CloudEdge Solutions / CloudCore Service",
    isi:"CloudEdge Solutions revolutionize infrastructure development  by combining converged infrastructure that reduces implementation, configuration, and management time and costs. This shift to integrated IT systems allows businesses to better analyze their IT investments and scale up or down as needed. The flexible nature of CloudEdge solutions helps reduce capital and operational expenditures while enhancing growth potential and business adaptability."
},
    {
    title:"SecureNet Technologies",
    isi:"The rise of cyber threats such as viruses, malware, and ransomware makes network security more critical than ever. SecureNet Technologies provide real-time protection for applications and infrastructure against network downtimes, malware spread, data theft, and web service attacks. With a security-focused approach, these technologies ensure that businesses can continue to operate without the constant worry of cyber threats, while also enabling remote work with secure access to company resources."
},
    {
    title:"TeleInfra Solutions",
    isi:"TeleInfra Solutions focus on providing efficient and integrated telecommunications infrastructure services. These solutions range from communication services to network outsourcing and include professional support for technology development. TeleInfra partners with industry leaders like Keysight Technologies and AirSpan to deliver high-performance, reliable systems. By providing the necessary tools and expertise, businesses can enhance their telecommunication operations, improve system stability, and gain better access to critical measurement tools."
},
    {
    title:"Data Core Systems",
    isi:"For many companies, effective data planning is not just a luxury but a necessity. DataCore Systems help organizations store, manage, and analyze large volumes of data. With the guidance of our technical experts, companies can make critical decisions and optimize their data storage strategies. Adopting a data-centric approach ensures that businesses can access theinsights they need to drive growth and efficiency, regardless of how large or complex their data sets may become."
},
    {
    title:"Analytics System",
    isi:"Analytics Systems use both qualitative and quantitative methods to boost productivity and enhance business outcomes. By extracting and categorizing data for analysis, businesses can uncover insights that guide decision-making processes. These systems help predict unknown outcomes,automate decisions, and identify optimal solutions, enabling organizations to respond to challenges quickly and make informed choices."
},

  {
    title: "Explanation",
    isi: "Application Innovation is focused on creating software solutions that cater to the specific needs of end-users. These applications range from basic data programs to advanced tools like web browsers and spreadsheets. By selecting the best application solutions for their users, businesses can improve functionality, enhance user experience, and better meet their goals. Application innovation simplifies operational processes, reduces human resource dependencies, and ultimately boosts profitability and business productivity."
  },
  {
    title: "Data Integration",
    isi: "Data Integration is critical for businesses that handle vast amounts of data from various sources. This solution enables companies to integrate data from diverse platforms such as CRM, marketing operations, and sales systems, allowing for better collaboration and improved business intelligence. By consolidating data, businesses can streamline operations, gain deeper insights, and improve their competitiveness in the market."
  },
  {
    title: "Data Platform",
    isi: "With the exponential growth of data, having an efficient data platform is more important than ever. These platforms help businesses interpret data consistently and meaningfully, ensuring that all users can access the right data at the right time. Data platforms enable companies to manage both structured and unstructured data effectively, providing employees with the insights they need for informed decision-making. A well-managed data platform improves business governance and ensures secure access to sensitive information."
  },
  {
    title: "Connected Industry Solutions/IoT",
    isi: "Connected Industry Solutions leverage connected objects that collect and transmit data through wireless networks, eliminating the need for human intervention. By linking everyday devices such as refrigerators, TVs, and printers to the internet, businesses can gather valuable data for improved decision-making and resource management. These solutions enhance operational efficiency, reduce costs, and improve product quality by utilizing data to optimize business performance."
  },
  {
    title: "AI Evolution Systems/Machine Learning",
    isi: "Artificial Intelligence (AI) Evolution Systems use machine learning to identify patterns in data, which can then be used to make predictions. These systems fall under the broader AI umbrella and are designed to discover hidden insights, solve complex problems, and predict future outcomes based on historical data. The ability to leverage machine learning helps businesses optimize operations, streamline manufacturing processes, and improve decision-making."
  },
  {
    title: "IT Automation Systems",
    isi: "IT Automation Systems focus on automating repetitive processes and tasks, ultimately enhancing IT performance and operational efficiency. Automation plays a vital role in optimizing IT and driving digital transformation by enabling autonomous IT processes that can adapt to changes based on user behavior and event triggers. These systems improve availability, reduce costs, and boost overall productivity."
  },
  {
    title: "Enterprise Resource Planning (ERP)",
    isi: "Enterprise Resource Planning (ERP) systems integrate various business processes into a unified system, making operations more efficient and providing valuable insights into company performance. With ERP, companies can eliminate redundant tasks, streamline data management, and improve decision-making. ERP helps businesses optimize resource allocation, reduce costs, and accelerate processes like sales and inventory management, ultimately driving growth."
  },
  {
    title: "Human Management System",
    isi: "Human Management Systems focus on improving human capital development by utilizing data analysis and presentation for informed decision-making. By managing recruitment, employee workload, and performance, these systems help businesses create a transparent and efficient environment. Enhanced security and ease of communication across departments ensure that businesses can operate smoothly, with optimized HR functions and processes that reduce administrative burdens."
  },
  {
    title: "Tech Consulting",
    isi: "Technology Consulting is a vital service for helping businesses implement digital strategies and adapt to rapidly changing technology landscapes. These services provide insights that help businesses grow, manage risks, reduce costs, and optimize systems. Technology consultants work closely with organizations to identify growth opportunities, innovate business models, and bring about operational efficiency, ultimately supporting strategic alignment and fostering technological transformation."
  }


]

export default HomeSynergio
