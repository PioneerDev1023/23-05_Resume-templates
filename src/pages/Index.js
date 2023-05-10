import React from "react";
import mainBg from "../assets/images/landingBG.jpg";

const Index = () => {
    return (
        <div className="bg-cover h-screen" style={{backgroundImage: `url(${mainBg}`}}>
            <header className="h-16 border-b border-solid">
                <a href="/#/first"><button className="text-white border border-solid rounded-md mt-[10px] ml-2 py-2 px-4">First Template</button></a>
                <a href="/#/second"><button className="text-white border border-solid rounded-md mt-[10px] ml-2 py-2 px-4">Second Template</button></a>
            </header>
        </div>
    )
}

export default Index;