import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png'; 

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);
  const closeNav = () => setNavOpen(false);

  return (
    <nav className="bg-white fixed top-0 left-0 w-full shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
     
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Firebrand Logo" className="h-8 w-8" />
          <Link to="/" className="text-xl font-bold text-blue-600">
            Firebrand Labs
          </Link>
        </div>

        
        <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
          <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
          <li><Link to="/services" className="hover:text-blue-600">Services</Link></li>
          <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
          <li><Link to="/blog" className="hover:text-blue-600">Blog</Link></li>
        </ul>

        <div className="md:hidden text-2xl cursor-pointer text-blue-600" onClick={toggleNav}>
          {navOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

     
      {navOpen && (
        <ul className="md:hidden flex flex-col bg-white px-4 pt-2 pb-4 space-y-2 font-medium text-gray-700 transition-all duration-300 ease-in-out">
          <li><Link to="/" onClick={closeNav} className="hover:text-blue-600">Home</Link></li>
          <li><Link to="/services" onClick={closeNav} className="hover:text-blue-600">Services</Link></li>
          <li><Link to="/contact" onClick={closeNav} className="hover:text-blue-600">Contact</Link></li>
          <li><Link to="/blog" onClick={closeNav} className="hover:text-blue-600">Blog</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
