import React, { useEffect } from "react";

function Projects(){
    useEffect( () => {
        document.title = "Home Page";
    }, []);

    return (
        <div className="projects-container m-10">
            <div className="text-4xl mt-8 mb-8 flex justify-center items-center"> Projects </div>
        </div>
    );
}

export default Projects;