import React from "react";
import TextField from '@mui/material/TextField';
import { useState } from "react";
import NavePage from "../pages/nave";
import FooterPage from "../pages/footer";

const ResumePage = () => {

    return (
        <div className="">
            <NavePage />
            <div className="container mx-auto text-center mb-8" >
                <h2 className="text-3xl font-bold inline-block underline decoration-[#34b7a7] decoration-4">Resume</h2>
            </div>

            {/* End Section Title */}
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-col-2 lg:grid-cols-2 gap-8">
                    <div className="col-lg-6 container mx-auto text-center mb-8" >
                        <h3 className="text-3xl font-bold inline-block underline decoration-[#34b7a7] decoration-4">Summary</h3>
                        <div className="py-4">
                            <p>
                                <em>
                                    Seeking a Python Developer role to utilize my knowledge of software
                                    development and object-oriented programming to create innovative
                                    solutions. Looking for a challenging position as a Python Developer where I
                                    can apply my knowledge of coding, debugging and testing.
                                </em>
                            </p>
                        </div>
                        <div class=" flex flex-col items-center">
                            <div class="w-4 h-4 bg-accent border-2 border-[#34b7a7] rounded-full"></div>
                            <div class="h-32 w-[2px] bg-[#34b7a7]"></div>
                        </div>
                        <h3 className="text-3xl font-bold inline-block underline decoration-[#34b7a7] decoration-4">Education</h3>
                        <div className="py-4">
                            <em>
                                <h4 className="font-bold underline decoration-[#34b7a7]">Master of Computer Application </h4>
                                <h5 className="font-bold">(2023 - 2025)</h5>
                                <p className="font-bold underline decoration-[#34b7a7]">Patel Collage Of Science and Technology, Indore -(RGPV)</p>
                                <p>
                                    Master of Computer Applications (MCA) is a postgraduate degree program in computer science and IT. It is designed to provide a strong foundation in programming, application development, and IT technologies. The course is ideal for those aspiring to build careers in software development, system analysis, data science, or related IT fields.
                                </p>
                            </em>
                        </div>
                        <div className="py-4">
                            <em>
                                <h4 className="font-bold underline decoration-[#34b7a7]">Bachelor of Commerce With Computer Application </h4>
                                <h5 className="font-bold">(2019 - 2022)</h5>
                                <p className="font-bold underline decoration-[#34b7a7]">PMB Gujarati Commerce College, Indore -(DAVV)</p>
                                <p>
                                    Bachelor of Commerce (B.Com) with Computer Applications is an undergraduate degree program that combines the principles of commerce with the study of computer applications. This course is designed to equip students with knowledge of business practices and the technical skills needed to leverage computer applications in business operations.
                                </p>
                            </em>
                        </div>
                    </div>
                    <div className="col-lg-6 container mx-auto mb-8" >
                        <div class="mobile-nav-toggle lg:hidden flex flex-col items-center">
                            <div class="w-4 h-4 bg-accent border-2 border-[#34b7a7] rounded-full"></div>
                            <div class="h-32 w-[2px] bg-[#34b7a7]"></div>
                        </div>
                        <div className="lg:ml-[25%] md:ml-[25%]">
                            <h3 className="text-3xl font-bold inline-block underline decoration-[#34b7a7] decoration-4 ">Professional Experience</h3>
                        </div>
                        <div className="">
                            <ul style={{ listStyleType: "circle" }}>
                                <li>
                                    <h4 className="font-bold underline decoration-[#34b7a7] decoration-3">Python Development</h4>
                                </li>
                            </ul>
                            <ul className="pl-4">
                                <li style={{ listStyleType: "disc" }}>
                                    <h3 className="font-bold underline decoration-[#34b7a7] decoration-3">FastAPI Development</h3>
                                </li>
                                <li>
                                    <em>Creating Efficient And Optimized API’s</em>
                                </li>

                                <li style={{ listStyleType: "disc" }}>
                                    <h3 className="font-bold underline decoration-[#34b7a7] decoration-3">Data Storage & Retrieval</h3>
                                </li>
                                <li>
                                    <em>Handle data operations , such as storing and retrieving information , which was the main part in our application</em>
                                </li>

                                <li style={{ listStyleType: "disc" }}>
                                    <h3 className="font-bold underline decoration-[#34b7a7] decoration-3">Text Files Management</h3>
                                </li>
                                <li>
                                    <em>Familiarity with file handling and data storage methods involving text-based
                                        formats</em>
                                </li>

                                <li style={{ listStyleType: "disc" }}>
                                    <h3 className="font-bold underline decoration-[#34b7a7] decoration-3">Python Frame Work (Django)</h3>
                                </li>
                                <li>
                                    <em>Experience With Web Application Development On Python Frame Work
                                        (Django)</em>
                                </li>
                            </ul>
                        </div>

                        {/* React */}
                        <div className="">
                            <ul style={{ listStyleType: "circle" }}>
                                <li>
                                    <h4 className="font-bold underline decoration-[#34b7a7] decoration-3">React Development</h4>
                                </li>
                            </ul>
                            <ul className="pl-4">
                                <li style={{ listStyleType: "disc" }}>
                                    <em className="">Integrating API’s in React.js application, Facilitating data exchange between the Front-end and Back-end System.</em>
                                </li>
                                <li style={{ listStyleType: "disc" }}>
                                    <em>
                                        Present Data in a Visually Appealing and Informative Manner, Organizing and
                                        displaying data in tables, ensuring accuracy and clarity.
                                    </em>
                                </li>
                                <li style={{ listStyleType: "disc" }}>
                                    <em>
                                        Created entities and pages in React Type Script Framework, Created custom
                                        features and functionalities.
                                    </em>
                                </li>
                                <li style={{ listStyleType: "disc" }}>
                                    <em>
                                        Created web forms for developing the application using react type script and HTML controls. Managed deployment on GitHub . Developed a variety of UI elements,such as Card, dropdown list etc.
                                    </em>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <FooterPage />
        </div>

    )
};
export default (ResumePage)