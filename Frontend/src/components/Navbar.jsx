import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="w-full p-5 flex justify-between items-center text-black bg-gray-lightest">
      <h1 className="text-3xl text-primary-yellow">Danish's Portfolio</h1>
      <nav className="flex-grow">
        <div className="flex justify-center space-x-6">
          <div className="nav-item">
            <Link to="/" className="text-black hover:text-primary-yellow">Home</Link>
          </div>
          <div className="nav-item">
            <Link to="/about" className="text-black hover:text-primary-yellow">About</Link>
          </div>
          <div className="nav-item">
            <Link to="/contact" className="text-black hover:text-primary-yellow">Contact</Link>
          </div>
        </div>
      </nav>
      <button className="bg-primary-yellow text-white py-2 px-4 rounded hover:bg-hover-yellow">
        Hire Me
      </button>
    </header>
  );
};

export default Navbar;
