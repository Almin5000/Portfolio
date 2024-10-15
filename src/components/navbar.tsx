import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { MdLanguage } from "react-icons/md";

function Navbar() {
  const { t, i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  
  const dropdownRef = useRef(null);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng); 
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-black bg-opacity-30 p-4 text-white flex items-center justify-between">
      {/* Navigation Links */}
      <ul className="flex justify-center space-x-10 md:space-x-20 text-m text-sm md:text-2xl py-2 flex-grow md:ml-24">
        <li>
          <Link
            to="/"
            smooth={true}
            duration={500}
            className="font-montserrat hover:text-red-500 transition duration-200 cursor-pointer"
          >
            {t('home')}
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="font-montserrat hover:text-red-500 transition duration-200 cursor-pointer"
          >
            {t('Portfolio')}
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="font-montserrat hover:text-red-500 transition duration-200 cursor-pointer"
          >
            {t('projects')}
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="font-montserrat hover:text-red-500 transition duration-200 cursor-pointer"
          >
            {t('contact')}
          </Link>
        </li>
      </ul>

      {/* Language Dropdown for Mobile */}
      <div className="relative flex items-center" ref={dropdownRef}>
        <button
          onClick={toggleDropdown}
          className="flex items-center hover:text-red-500 transition duration-200 cursor-pointer md:hidden"
        >
          <MdLanguage className="text-2xl" />
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute -right-5 mt-24 bg-black bg-opacity-80 rounded shadow-lg">
            <button
              onClick={() => changeLanguage('da')}
              className={`block px-4 py-2 text-sm ${selectedLanguage === 'da' ? 'text-red-500' : 'text-white'} hover:text-red-500`}
            >
              Dansk
            </button>
            <button
              onClick={() => changeLanguage('en')}
              className={`block px-4 py-2 text-sm ${selectedLanguage === 'en' ? 'text-red-500' : 'text-white'} hover:text-red-500`}
            >
              English
            </button>
          </div>
        )}
      </div>

      {/* Language Buttons for Desktop */}
      <div className="hidden md:flex items-center space-x-4 text-sm">
        <button
          onClick={() => changeLanguage('da')}
          className={`font-montserrat hover:text-red-500 transition duration-200 cursor-pointer ${selectedLanguage === 'da' ? 'text-red-500' : 'text-white'}`}
        >
          Dansk
        </button>
        <button
          onClick={() => changeLanguage('en')}
          className={`font-montserrat hover:text-red-500 transition duration-200 cursor-pointer ${selectedLanguage === 'en' ? 'text-red-500' : 'text-white'}`}
        >
          English
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
