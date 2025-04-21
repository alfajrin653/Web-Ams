import React, { useState } from 'react';
import { SlArrowDown } from "react-icons/sl";

export default function Card({ title, desk, className = '', textColor = 'text-primary border-primary', isi = '' }) {
  return (
    <div className={`flex flex-col justify-center items-center text-center border-2  ${className} h-[266px] w-[180px] p-2.5`}>
      <h3 className={`text-[20px] font-bold ${textColor} pb-[5px]`}>
        {title}
      </h3>
      <p className='text-[11px] w-full'>
        {desk}
      </p>

      {isi && <Deskripsi isi={isi} />}
    </div>
  );
}

const Deskripsi = ({isi}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left w-full mt-4">
      <button
        onClick={toggleDropdown}
        className=" text-black px-4 py-2 flex items-center justify-center gap-1 w-full"
      >
       <SlArrowDown/>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 h-auto w-[180px] md:w-[300px] bg-white border border-gray-200 rounded-md shadow-lg p-4 text-sm font-medium  text-gray-700">
          {isi}
        </div>
      )}
    </div>
  );
};
