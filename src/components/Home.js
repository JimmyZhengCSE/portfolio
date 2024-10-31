import React, { useEffect } from "react";

function Home(){
    useEffect( () => {
        document.title = "Home Page";
    }, []);

    return (
        <div className="home-container">
            <header className="home-header">
                <h1> Welcome to my Portfolio!</h1>
                <h2> My name is Jimmy Zheng and I am currently studying
                    Computer Science at Stony Brook University.
                </h2>
                {/* <img></img>   */}
            </header>
            <p>This page is a collection of my projects and expertise. Welcome. </p>
            <p> Host of all things magical</p>
        </div>
    );
}

export default Home;