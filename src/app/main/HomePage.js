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
import { useNavigate } from "react-router-dom";



const HomePage = () => {

  const description1 = "Designed and implemented a comprehensive Biomedical Waste Management System for CPCB, utilizing Python with FastAPI on the backend. The system ensures efficient registration of waste generators, implements a robust validation process, records the GPS location of waste collection vehicles through the 'Track My Fleet' website, and stores waste bag records in both a text file and MongoDB database."

  const description2 = "Developed RESTful APIs using FastAPI to facilitate the seamless registration of biomedical waste generators, including Common Biomedical Waste Treatment Facilities (CBWTF) and Healthcare Facilities (HCF). Implemented a user-friendly registration process with comprehensive validation, ensuring accurate and compliant data entry. Additionally, created registration endpoints to enable efficient communication between the backend and frontend components, contributing to a cohesive and integrated Biomedical Waste Management System for the Central Pollution Control Board (CPCB)."

  const description3 = "Created user-friendly registration pages for CBWTF and HCF entities, optimizing the user experience. Implemented dynamic form validation for real-time feedback to users during the registration process. Designed and developed a dashboard to display daily waste bag reports , Utilized React components to present the information in an intuitive and visually appealing manner. Integrated charting libraries (e.g., Chart.js) to generate dynamic charts illustrating monthly summaries of waste bag data . Implemented features to allow users to filter and interact with the charts for better data analysis."

  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isExpanded3, setIsExpanded3] = useState(false);

  const shortText1 = description1.length > 100 ? description1.slice(0, 100) + "..." : description1;
  const shortText2 = description2.length > 100 ? description2.slice(0, 100) + "..." : description2;
  const shortText3 = description3.length > 100 ? description3.slice(0, 100) + "..." : description3;

  const navigate = useNavigate();

  const navigateToExternalSite = () => {
    window.location.href = "https://example.com";
  };

  return (
    <div className="">
      <NavePage />

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
              <p className="text-lg">I'm A Professional Back-End Developer</p><br />
              <button onClick={() => { navigate("/About") }} className="btn-get-started bg-[#34b7a7] text-white py-2 px-4 rounded">About Me</button>
            </div>
          </div>
        </div>
      </section>

    <div className="container mx-auto flex justify-center">
    <div className="grid sm:grid-col-1 md:grid-col-2 lg:grid-cols-3 gap-6 p-6">

        {/* card 1 */}
        <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-gray-100 p-4 ">
          <div className="px-4 py-2">
            <h2 className="font-bold text-md text-gray-800 underline decoration-[#34b7a7] decoration-3">Bio-Medical Waste Management System</h2>
            <p className="text-gray-600 mt-2">{isExpanded1 ? description1 : shortText1}</p>
            {description1.length > 100 && (
              <button
                onClick={() => setIsExpanded1(!isExpanded1)}
                className="text-blue-500 hover:underline mt-2"
              >
                {isExpanded1 ? "Read Less" : "Read More"}
              </button>
            )}
          </div>
          {/* <div className="px-4 py-2">
            <button className="bg-[#34b7a7] text-white font-bold py-2 px-4 rounded-xl" onClick={navigateToExternalSite}>
              Learn More
            </button>
          </div> */}
        </div>

        {/* card 3 */}
        <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-gray-100 p-4 ">
          <div className="px-4 py-2">
            <h2 className="font-bold text-md text-gray-800 underline decoration-[#34b7a7] decoration-3">Fast API Backend Development</h2>
            <p className="text-gray-600 mt-2">{isExpanded2 ? description2 : shortText2}</p>
            {description2.length > 100 && (
              <button
                onClick={() => setIsExpanded2(!isExpanded2)}
                className="text-blue-500 hover:underline mt-2"
              >
                {isExpanded2 ? "Read Less" : "Read More"}
              </button>
            )}
          </div>
          {/* <div className="px-4 py-2">
            <button className="bg-[#34b7a7] text-white font-bold py-2 px-4 rounded-xl" onClick={navigateToExternalSite}>
              Learn More
            </button>
          </div> */}
        </div>

        {/* card 3 */}
        <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-gray-100 p-4 ">
          <div className="px-4 py-2">
            <h2 className="font-bold text-md text-gray-800 underline decoration-[#34b7a7] decoration-3">React.js Frontend Development</h2>
            <p className="text-gray-600 mt-2">{isExpanded3 ? description3 : shortText3}</p>
            {description3.length > 100 && (
              <button
                onClick={() => setIsExpanded3(!isExpanded3)}
                className="text-blue-500 hover:underline mt-2"
              >
                {isExpanded3 ? "Read Less" : "Read More"}
              </button>
            )}
          </div>
          {/* <div className="px-4 py-2">
            <button className="bg-[#34b7a7] text-white font-bold py-2 px-4 rounded-xl" onClick={navigateToExternalSite}>
              Learn More
            </button>
          </div> */}
        </div>
      </div>
    </div>
      
      <FooterPage />

    </div>

  )
};
export default (HomePage)