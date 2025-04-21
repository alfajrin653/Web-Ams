import { useState, useEffect } from "react";
import CarouselItem from "../Components/CarouselItem";
import CarouselButton from "../Components/CarouselButton";

import client1 from "../assets/client/logo1.jpg";
import client2 from "../assets/client/logo2.png";
import client3 from "../assets/client/logo3.jpg";
import client4 from "../assets/client/logo4.png";
import client5 from "../assets/client/logo5.jpg";
import client6 from "../assets/client/logo6.png";
import client7 from "../assets/client/logo7.jpg";
import client8 from "../assets/client/logo8.png";
import client9 from "../assets/client/logo9.png";
import client10 from "../assets/client/logo10.png";
import client11 from "../assets/client/logo11.png";
import client12 from "../assets/client/logo12.png";
import client13 from "../assets/client/logo13.png";
import client14 from "../assets/client/logo14.png";
import client15 from "../assets/client/logo15.png";
import client16 from "../assets/client/logo16.png";
import client17 from "../assets/client/logo17.png";
import client18 from "../assets/client/logo18.png";

const clients = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10, client11, client12, client13, client14, client15, client16, client17, client18];

const OurClient = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItems = 12;

  // Duplikat data agar terasa endless
  const extendedClients = [...clients, ...clients, ...clients];

  // Fungsi untuk pindah ke slide berikutnya
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % extendedClients.length);
  };

  // Fungsi untuk kembali ke slide sebelumnya
  const prevSlide = () => {
    setCurrentIndex((prev) =>
      (prev - 1 + extendedClients.length) % extendedClients.length
    );
  };

  // Auto slide tiap 3 detik
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  // Ambil 12 item dengan sistem loop sambung
  let visibleClients = [];
  if (currentIndex + visibleItems <= extendedClients.length) {
    visibleClients = extendedClients.slice(currentIndex, currentIndex + visibleItems);
  } else {
    const endSlice = extendedClients.slice(currentIndex);
    const startSlice = extendedClients.slice(0, visibleItems - endSlice.length);
    visibleClients = [...endSlice, ...startSlice];
  }

  return (
    <>
      <div id='client' className="pt-30" ></div>
      <div className="relative flex items-center justify-center w-full overflow-hidden p-4">
        <CarouselButton direction="left" onClick={prevSlide} />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:grid-rows-3 gap-10 transition-all duration-500">
          {visibleClients.map((img, index) => (
            <CarouselItem key={index} img={img} />
          ))}
        </div>

        <CarouselButton direction="right" onClick={nextSlide} />
      </div>
    </>
  );
};
export default OurClient;
