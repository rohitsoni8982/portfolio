import React, { useState } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

const FooterPage = () => {
  return (
    <div className=''>
    <footer className="footer bg-gray-100 py-8">
      <div className="container text-center">
        <p className="text-sm">
          © <span>Copyright</span> <span>All Rights Reserved</span>
        </p>
        <div className="social-links flex justify-center space-x-4">
          <a href="#" className="hover:text-[#05d3f7] transition-all duration-300"><TwitterIcon /></a>
          <a href="#" className="hover:text-[#0313fc] transition-all duration-300"><FacebookIcon /></a>
          <a href="#" className="hover:text-[#f507d1] transition-all duration-300"><InstagramIcon /></a>
          <a href="#" className="hover:text-[#130ce8] transition-all duration-300"><LinkedInIcon /></a>
          <a href="#" className="hover:text-[#07f7ef] transition-all duration-300"><GitHubIcon /></a>
        </div>
        <p className="text-xs mt-4">Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> Distributed by <a href="https://themewagon.com">ThemeWagon</a></p>
      </div>
    </footer>
    </div>
  );
};

export default FooterPage;
