import React, { useState } from "react";
import logoAG from "../assets/logoAG.png";
import { SlArrowDown } from "react-icons/sl";
import { HashLink } from 'react-router-hash-link';


const Logo = () => (
  <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
    <img src={logoAG} className="h-8" alt="Adinata Logo" />
    <span className="self-center text-xl font-semibold whitespace-nowrap ">Adinata Group</span>
  </a>
);

const SearchInput = ({ isVisible }) => (
  <div className={`relative ${isVisible ? 'block' : 'hidden'} lg:block w-full md:w-auto`}> 
    <div className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none">
      <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
      </svg>
    </div>
    <input type="text" className="block w-full p-2 ps-7 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search..." />
  </div>
);

const MenuItems = () => {
  return (
    <ul className="flex flex-col font-bold md:flex-row md:space-x-8 rtl:space-x-reverse text-gray-900  text-sm md:text-base">
      {/* <List href="#about" title="About Us" />
      <List href="https://Xentra.co.id" title="Xentra (ERP Odoo)" />
      <ProductAndService />
      <List href="#client" title="Client" />
      <List href="#contact" title="Contact Us" /> */}

      {/* Ganti semua yang butuh redirect ke / dengan hash */}
      <li>
        <HashLink smooth to="/#about" className="block py-2 px-3 rounded-lg hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700">
          About Us
        </HashLink>
      </li>
      <List href="https://Xentra.co.id" title="Xentra (ERP Odoo)"  target="_blank" 
  rel="noopener noreferrer"  />
      <ProductAndService />
      <li>
        <HashLink smooth to="/#client" className="block py-2 px-3 rounded-lg hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700">
          Client
        </HashLink>
      </li>
      <li>
        <HashLink smooth to="/#contact" className="block py-2 px-3 rounded-lg hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700">
          Contact Us
        </HashLink>
      </li>
    
    </ul>
  );
};

const ProductAndService = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  return (
  <li className="relative about-menu" onMouseEnter={() => setIsAboutOpen(true)}>
  <button onClick={() => setIsAboutOpen(!isAboutOpen)} className="flex items-center gap-1  py-2 px-1 rounded-sm text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700">
   Product and Service<SlArrowDown /></button>
   {isAboutOpen && (
   <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg">
   <li><a href="https://Xentra.co.id" className="block px-4 py-2 text-primary hover:bg-gray-100">Xentra (ERP Odoo) </a></li>
   <li><a href="/TechBloom" className="block px-4 py-2 text-primary hover:bg-gray-100">TechBloom</a></li>
   <li><a href="/Zentara" className="block px-4 py-2 text-primary hover:bg-gray-100">Zentara</a></li>
   <li><a href="/Synergio" className="block px-4 py-2 text-primary hover:bg-gray-100">Synergio</a></li>
   </ul>
   )}
   </li>
  );
};  

const List = ({ href, title }) => (
  <li>
    <a href={href} className="block py-2 px-3 rounded-lg hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700">{title}</a>
  </li>
);

const Navbar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-20 bg-white border-gray-200  w-screen p-4">
      <div className="max-w-screen mx-auto flex items-center justify-between">
        <Logo />
        <div className="hidden [@media(min-width:1140px)]:flex items-center space-x-4">
          <MenuItems />
          <SearchInput isVisible={true} />
        </div>
        <div className="[@media(min-width:1150px)]:hidden flex items-center space-x-2">
          <button onClick={() => setIsNavOpen(!isNavOpen)} className="p-2 text-gray-500">☰</button>
          <button onClick={() => setIsSearchVisible(!isSearchVisible)} className="p-2 text-gray-500">🔍</button>
        </div>
      </div>
      {isNavOpen && (
        <div className="[@media(min-width:1140px)]:hidden p-2">
          <MenuItems />
        </div>
      )}
      {isSearchVisible && (
        <div className="[@media(min-width:1140px)]:hidden p-2">
          <SearchInput isVisible={true} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
