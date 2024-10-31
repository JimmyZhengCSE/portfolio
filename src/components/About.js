import React, { useEffect } from "react";

function About() {
    useEffect( () => {
        document.title = "About Page";
    }, []);

    return (
        <div className="about-container m-10">
            <div className="text-4xl flex justify-center items-center"> About </div>
            <p id="hello"> Hello World! </p>
            <p id="joke"> {`(get it?)`} </p>
            <section className="about-text">
                <p>
                    I'm Jimmy. I am currently a Stony Brook Student studying 
                    Computer Science. 
                </p>
                <p>
                    Placeholder
                </p>
                <a className="normal-link" target="_blank"
                href="https://www.linkedin.com/in/jimmy-zheng-16983724a/"> 
                Linkedin 
                </a>
            </section>
        </div>
    );
}

export default About;