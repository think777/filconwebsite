import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-100">
      <div className="flex items-center">
        <img className="w-10 h-10 mr-2" src="logo.png" alt="Logo" />
        <span className="text-xl font-bold">Company Name</span>
      </div>
      <div className="space-x-4">
        <a href="#" className="text-gray-600 hover:text-gray-800">About Us</a>
        <a href="#" className="text-gray-600 hover:text-gray-800">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;