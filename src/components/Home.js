import React, { useEffect } from "react";

function Home(){
    useEffect( () => {
        document.title = "Home Page";
    }, []);

    return (
        <div className="home-container m-10">
            <div className="text-4xl mt-8 mb-8 flex justify-center items-center"> Home </div>
            <div className="home-header">
                <p className="text-4xl font-bold mb-10"> Welcome to my Portfolio!</p>
                <p className="text-2xl font-semibold"> 
                    My name is Jimmy Zheng and I am currently studying
                    Computer Science at Stony Brook University.
                </p>
            </div>
            <div className="content-header mt-10">
                <p>This page is a collection of my projects and expertise. Welcome. </p>
                <p> Host of all things magical!</p>
            </div>
        </div>
    );
}

export default Home;