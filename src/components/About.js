import React, { useEffect } from "react";

function About() {
    useEffect( () => {
        document.title = "About Page";
    }, []);

    return (
        <div className="about-container m-10">
            <div className="text-4xl flex justify-center items-center"> About </div>
            <p className="mb-3"> Hello World! {`(get it?)`}</p>
            <section className="about-text">
                <div className="biography-section mb-2">
                    <div className="normal-text">
                        I'm Jimmy. I am currently a Stony Brook Student studying Computer Science. Welcome to my page.
                    </div>
                    <div className="normal-text mt-2"> 
                        As a lifelong learner, I thrive to continuously stack my knowledge and skills as I innovate 
                        along my journey. As such, this page aims to keep track of all my experiences. I am always
                        eager to explore new technologies, tackle challenging problems, and collaborate with others
                        in this exciting world.
                    </div>
                    <div className="normal-text mt-2">
                        Outside of my work and education, I enjoy working out and watching shows & movies. My favorite movie is
                        <em> Interstellar</em>. I highly recommend watching it.
                    </div>
                </div>
                <div className="misc grid grid-cols-4 gap-4">
                    <div className="skills-section col-span-1">
                    <strong className="topic-header text-2xl"> Skills </strong>
                        <ul className="about-list">
                            <li> Python </li>
                            <li> Java </li>
                            <li> C </li>
                            <li> HTML, CSS, JavaScript </li>
                            <li> React </li>
                            <li> Node.js </li>
                            <li className="mb-2"> Git </li>
                            <li> Communication, teamwork, time management, adaptability </li>
                        </ul>
                    </div>

                    <div className="education-section col-span-1">
                    <strong className="topic-header text-2xl"> Education </strong>
                        <div className="education-container">
                            <div className="education-header"> BS Computer Science</div>
                            <div className="school-and-date">
                                <div className="school"> Stony Brook University </div>
                                <div className="date">{`(2021-2025)`}</div>
                            </div>
                        </div>
                    </div>

                    <div className="certifications-section col-span-1">
                    <strong className="topic-header text-2xl flex-col flex"> Certifications </strong>
                    <a className="normal-links underline text-blue-500" target="_blank"
                    href="https://drive.google.com/drive/folders/1j7G1b6fk9MLR66fyTFFVjB71fjsLiMm4?usp=drive_link">
                    Certifications 
                    </a>
                    </div>

                    <div className="certifications-section col-span-1">
                    <strong className="topic-header text-2xl"> Languages </strong>
                        <ul className="about-list">
                                <li> English </li>
                                <li> Chinese </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;