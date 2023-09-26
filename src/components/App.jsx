import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Bio from "./Bio";
import CurrentWork from "./CurrentWork";
import Project from "./Projects";
import Footer from "./Footer";
import Experience from "./Experience";

function App() {
    return (<div>
        <Navbar />
        <Header />
        <Bio />
        <CurrentWork />
        <Experience />
        <Project />
        <Footer />
    </div>
    )
}

export default App;