import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-100 text-black py-6 mt-0.5">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-xl font-semibold text-blue-800">Firebrand Labs</h2>
        <p className="mt-2 text-sm">
             First floor,No 12,1st cross st,karpagam Gardens, Adyar,Chennai ,tamilnadu 600020
        </p>

        <div className="flex justify-center space-x-4 mt-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/services" className="hover:underline">Services</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
          <Link to="/blog" className="hover:underline">Blog</Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
