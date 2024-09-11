import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="flex justify-center items-center py-3 z-20 bg-black w-full text-gray-50 absolute bottom-0">
      <p className="text-lg headingp1 cursor-pointer">
        Project By{' '}
        <Link to={'/'} className="underline hover:text-gray-100">
          Redefine Group
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
