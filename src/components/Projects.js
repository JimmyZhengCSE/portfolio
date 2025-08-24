import React, { useEffect } from "react";

function Projects(){
    useEffect( () => {
        document.title = "Projects Page";
    }, []);

    return (
        <div className="projects-container m-10">
            <div className="text-4xl flex justify-center items-center">My Projects</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
                {/* Project 1 */}
                <div className="project-card bg-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-white">
                    <h3 className="text-xl font-semibold mb-2 text-white dark:text-black">Where in SBU?</h3>
                    <p className="text-gray-400 font-bold mb-4">
                        A browser-based game inspired by Geoguessr, where players explore <strong>Stony Brook University</strong> with Google Maps 
                        Street View. Players are challenged to guess their exact location on campus by placing a marker on an interactive map.
                    </p>
                    <div className="tech-stack text-sm text-gray-400 mb-4">
                        <span className="mr-4">Google Maps API</span>
                        <span className="mr-4">JavaScript</span>
                        <span>HTML</span>
                    </div>
                    <a href="https://whereinsbu.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">View Project</a>
                </div>

                {/* Project 2 */}
                <div className="project-card bg-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-white">
                    <h3 className="text-xl font-semibold mb-2 text-white dark:text-black">Trivia</h3>
                    <p className="text-gray-400 font-bold mb-4">Test your knowledge with this fun trivia app!</p>
                    <div className="tech-stack text-sm text-gray-400 mb-4">
                        <span className="mr-2">Flask</span>
                        <span className="mr-2">React</span>
                        <span>JavaScript</span>
                    </div>
                    <a href="https://trivia-jz60.onrender.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">View Project</a>
                </div>

                {/* Project 3 */}
                {/* <div className="project-card bg-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-white">
                    <h3 className="text-xl font-semibold mb-2 text-white dark:text-black">Project 3</h3>
                    <p className="text-gray-400 font-bold mb-4">Description.</p>
                    <div className="tech-stack text-sm text-gray-400 mb-4">
                        <span className="mr-2">Tech 1</span>
                        <span className="mr-2">Tech 2</span>
                        <span>Tech 3</span>
                    </div>
                    <a href="https://project-link.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">View Project</a>
                </div> */}

            </div>
        </div>

    );
}

export default Projects;
