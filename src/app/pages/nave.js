import React, { useState } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../main/AboutPage'
import '../main/HomePage'
import '../main/Resume'
import '../main/Contact'
import rohitimg from '../../img/rohitimg.jpg'

const NavePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="index-page sticky top-0">
      <Header toggleMenu={toggleMenu} menuOpen={menuOpen} />
    </div>
  );
};

const Header = ({ toggleMenu, menuOpen }) => {
  return (
    <header className="header d-flex items-center bg-gray-100 p-0 m-2 rounded-md">
      <div className="container-fluid flex justify-between items-center px-4 py-1">
        <a href="/" className="flex items-center">
         <img src={rohitimg} alt="" className="h-14 object-cover rounded-full " />
         <label className='font-bold text-[12px] hover:text-[#34b7a7] hover:text-xl cursor-pointer px-2'>ROHIT SONI</label><br/>
        </a>

        <nav className="navmenu hidden md:flex items-center space-x-4">
          <ul className="flex space-x-6">
            <li><a href="/" className="text-base hover:text-[#34b7a7] hover:text-xl hover:font-bold hover:underline  transition-all duration-300">Home</a></li>
            <li><a href="/About" className="text-base hover:text-[#34b7a7] hover:text-xl hover:font-bold hover:underline  transition-all duration-300">About</a></li>
            <li><a href="/Resume" className="text-base hover:text-[#34b7a7] hover:text-xl hover:font-bold hover:underline  transition-all duration-300">Resume</a></li>
            <li><a href="/Contact" className="text-base hover:text-[#34b7a7] hover:text-xl hover:font-bold hover:underline  transition-all duration-300">Contact</a></li>
          </ul>
        </nav>

        {/* Hamburger for mobile */}
        <button className="mobile-nav-toggle text-xl md:hidden px-4" onClick={toggleMenu}>
          {menuOpen ? 'X' : '☰'}
        </button>

        {/* Social Icons */}
        <div className="header-social-links flex space-x-4">
          <a href="#" className="hover:text-[#05d3f7] transition-all duration-300"><TwitterIcon /></a>
          <a href="#" className="hover:text-[#0313fc] transition-all duration-300"><FacebookIcon /></a>
          <a href="#" className="hover:text-[#f507d1] transition-all duration-300"><InstagramIcon /></a>
          <a href="#" className="hover:text-[#130ce8] transition-all duration-300"><LinkedInIcon /></a>
          <a href="#" className="hover:text-[#07f7ef] transition-all duration-300"><GitHubIcon /></a>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu flex flex-col md:hidden bg-gray-100 p-4">
          <a href="/" className="py-2">Home</a>
          <a href="/About" className="py-2">About</a>
          <a href="/Resume" className="py-2">Resume</a>
          <a href="/Contact" className="py-2">Contact</a>
        </div>
      )}
    </header>
  );
};

export default NavePage;
