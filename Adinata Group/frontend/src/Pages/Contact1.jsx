import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-white p-10 pt-20">
      <div className="container px-6 py-12 mx-auto">
        <div>
          <p className="font-medium text-primary"></p>
          <h1 className="mt-2 text-2xl font-semibold text-primary md:text-3xl">Contact us</h1>
          
        </div>

        <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Email */}
          <div>
            <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80">
              <MdEmail className="w-6 h-6" />
            </span>
            <h2 className="mt-4 text-lg font-medium text-gray-800">Email</h2>
            <p className="mt-2 text-blue-500">admin@adinatamitrasolusi.com</p>
          </div>

          {/* Office */}
          <div>
            <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80">
              <MdLocationOn className="w-6 h-6" />
            </span>
            <h2 className="mt-4 text-lg font-medium text-gray-800">Office</h2>
            <p className="mt-2 text-blue-500">JL Jombang Raya No 34, Pd. Pucung, Kec. Pd. Aren, Kota Tangerang Selatan, Banten, ID</p>
          </div>

          {/* Phone */}
          <div>
            <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80">
              <MdPhone className="w-6 h-6" />
            </span>
            <h2 className="mt-4 text-lg font-medium text-gray-800">Phone</h2>
            <p className="mt-2 text-blue-500">+622174865216</p>
          </div>
        </div>
      </div>
    </section>
  );
};


export default ContactSection;
