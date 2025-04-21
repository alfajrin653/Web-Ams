import Layout from "../../Layout/TechLayout";

const SystemDevelopment = () => {
  return (
    <div id="system">
    <Layout
      leftContent={{
        title: "IT SYSTEM DEVELOPMENT",
        title2: "Product",
        products: [
          "Software as a Service",
          "Desktop Manage Service",
          "Performance Monitoring Service",
          "Infrastructure Service",
          "Business Mobility Solution",
          "HR Application Solution",
          "POS Application Solution",
          "Mobile & Web Application Solution",
        ],
      }}
      rightContent={{
        description:
          "Our IT System Development Services specialize in creating customized software applications for both web and mobile platforms. By leveraging the Scrum project management methodology, we ensure efficient, flexible, and scalable development that meets the unique needs of your business. Our approach is designed to deliver high-quality solutions that drive innovation and business growth.",
        method: true,
        benefits : [
          { title: "Efficient Development", description: "Gain access to highly skilled specialists proficient in their respective fields." },
          { title: "Scable Solution", description: "We match the right expert personnel toalign seamlessly with your company." },
          { title: "Budget Flexibility", description: "Minimize operational costs associated with human resource management." },
        ],
        whyChooseUs: [
          
        {title:"Flexible",description:"We understand that every business is unique, and our flexible approach allows us to tailor our services to meet your specific needs."},
        {title:"Quality Assurance",description:"We prioritize quality assurance to ensure that our services meet your expectations and exceed your expectations."},
        {title:"Customer Satisfaction",description:"We prioritize customer satisfaction by delivering exceptional results that exceed your expectations."},
      ]
      }}
    />
    </div>
  );
};

export default SystemDevelopment;   
