import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-100 text-black py-6 mt-0.5">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-xl font-semibold text-blue-800">Firebrand Labs</h2>
        <p className="mt-2 text-sm">
          Firebrand Labs, No. 42, Digital Tech Park, Tidel Street, Chennai – 600113, India.
        </p>

        <div className="flex justify-center space-x-4 mt-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/services" className="hover:underline">Services</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
          <Link to="/blog" className="hover:underline">Blog</Link>
        </div>

        <p className="mt-4 text-xs text-gray-300">© {new Date().getFullYear()} Firebrand Labs. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
