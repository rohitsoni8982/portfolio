import React from "react";
import NavePage from "../pages/nave";
import rohitimg from "../../img/rohit1.jpg";
import FooterPage from "../pages/footer";

const AboutPage = () => {

    return (
        <div className="">
            <NavePage />
            <div>
                <main >
                    <section className=" py-8">
                        <div className="container mx-auto text-center mb-8" >
                        <h2 className="text-3xl font-bold inline-block underline decoration-[#34b7a7] decoration-4">
                            About
                        </h2>
                            <p className="text-gray-600 mt-4">
                              I am experience in Back-end and Front-end development.
                            </p>
                        </div>

                        <div className="container mx-auto" data-aos="fade-up" data-aos-delay="100">
                            <div className="grid md:grid-cols-2 gap-2 items-center">
                                <div className="mx-auto">
                                    <img src={rohitimg} className="h-[400px] rounded-lg" alt="Profile" />
                                </div>
                                <div className="mobile-nav-toggle px-4 py-0 sm:px-4 sm:py-2">
                                    <h2 className="text-2xl font-semibold">Back-end & Web Developer</h2>
                                    <p className="italic py-4 text-gray-700">
                                        Seeking a Python Developer role to utilize my knowledge of software development and object-oriented programming to create innovative solutions. Looking for a challenging position as a Python Developer where I can apply my knowledge of coding, debugging and testing.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <ul className="text-gray-600">
                                            <li><strong>Birthday:</strong> <span>25 March 2001</span></li>
                                            <li><strong>Phone:</strong> <span>+91 93406-82445</span></li>
                                            <li><strong>City:</strong> <span>Indore, India</span></li>
                                        </ul>
                                        <ul className="text-gray-600">
                                            <li><strong>Age:</strong> <span>23</span></li>
                                            <li><strong>Degree:</strong> <span>Master</span></li>
                                            <li><strong>Email:</strong> <span>rohitsoni8982@gmail.com.com</span></li>
                                        </ul>
                                    </div>
                                    <p className="py-4 text-gray-700">
                                    In React Developed simplifies the process of creating reusable UI components, enabling developers to build fast, scalable, and maintainable applications.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Skills Section */}
                    <section className="section py-16 bg-gray-50">
                        <div className="container mx-auto text-center mb-8" data-aos="fade-up">
                            <h2 className="text-3xl font-bold">Skills</h2>
                        </div>

                        <div className="container mx-auto" data-aos="fade-up" data-aos-delay="100">
                            <div className="grid md:grid-cols-2 gap-8">
                                {[
                                    { skill: "Python", value: 75 },
                                    { skill: "FastAPI", value: 70 },
                                    { skill: "MongoDB", value: 60 },
                                    { skill: "Django", value: 45 },
                                    { skill: "HTML", value: 40 },
                                    { skill: "React", value: 30 },
                                    { skill: "CSS", value: 30 },
                                    { skill: "C", value: 25 },
                                    { skill: "C++", value: 25 },
                                    { skill: "MySQL", value: 20 },
                                ].map(({ skill, value }, idx) => (
                                    <div key={idx} className="w-full">
                                        <span className="block font-medium">
                                            {skill} <span className="float-right">{value}%</span>
                                        </span>
                                        <div className="bg-gray-200 rounded-full h-4 mt-2">
                                            <div
                                                className={`bg-blue-500 h-4 rounded-full`} style={{ width: `${value}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Stats Section */}
                    <section id="stats" className="stats section py-16">
                        <div className="container mx-auto text-center mb-8" data-aos="fade-up">
                            <h2 className="text-3xl font-bold">Total Experience</h2>
                        </div>

                        <div className="container mx-auto grid md:grid-cols-5 gap-6" data-aos="fade-up" data-aos-delay="100">
                            {[
                                { label: "Python", value: 1.6 },
                                { label: "FastAPI", value: 1 },
                                { label: "MongoDB", value: 0.6 },
                                { label: "Django", value: 0.4 },
                                { label: "React", value: 0.3 },
                            ].map(({ label, value }, idx) => (
                                <div key={idx} className="text-center">
                                    <h3 className="text-4xl font-bold text-blue-600">{value}</h3>
                                    <p className="text-gray-700 mt-2">{label}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Footer */}
                    <FooterPage/>
                </main>
            </div>
        </div>

    )
};
export default (AboutPage)