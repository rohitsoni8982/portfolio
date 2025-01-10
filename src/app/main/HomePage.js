import React from "react";
import TextField from '@mui/material/TextField';
import { useState } from "react";
import NavePage from "../pages/nave";
import FooterPage from "../pages/footer";
import img1 from '../../img/developerimg.png'
import img2 from '../../img/img1.avif'
import img3 from '../../img/img2.jpg'
import '../main/AboutPage'
import rohitimg from '../../img/rohitimg.jpg'


const HomePage = () => {
   
    return (
        <div className="">
            <NavePage/>
    
        <section id="hero" className="hero">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4">
      <img src={img1} alt="" className="w-full h-auto w-auto object-cover" />
      <img src={img2} alt="" className="w-full h-auto w-auto object-cover" />
      <img src={img3} alt="" className="w-full h-auto w-auto object-cover" />
            </div>  

      <div className="container text-center px-4 py-8">
        <div className="row justify-center">
          <div className="col-lg-8">
            <h2 className="text-3xl font-bold">Rohit Soni</h2>
            <p className="text-lg">I'm A Professional Back-End Developer</p><br/>
            <a href="/About" className="btn-get-started bg-[#34b7a7] text-white py-2 px-4 rounded">About Me</a>
          </div>
        </div>
      </div>
    </section>
    <FooterPage/>
                
        </div>

    )
};
export default (HomePage)