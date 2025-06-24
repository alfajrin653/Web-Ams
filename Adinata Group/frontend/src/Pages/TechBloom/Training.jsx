import Layout from "../../Layout/TechLayout";

const Training = () => {
    return (
        <div id="Academy" className=" ">
        <Layout
        leftContent={{
          title: "IT TRAINING EDUCATION",
          title2: "IT Training :",
          products: [
            "IT Service Management (ITIL v4 Foundation)",
            "Tata Kelola TI (COBIT 2019 / CGEIT)",
            "Data Center Specialist (CDCS)",
          ],
        }}
      />
      </div>
    );
  };
  export default Training;