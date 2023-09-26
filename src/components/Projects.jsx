import React from "react";
import projects from './data-project';

function Project() {
    return <div id="projects" style={{ paddingTop: "60px", marginTop: "-60px" }}>
        <div className="project-container">
            <h6 className="bio title">
                PROJECTS
            </h6>
            {projects.map(project => (
                <div className="project-box">
                    <div className="project-name"><a href={project.link}>{project.name}</a></div>
                    <p>{project.about}</p>
                </div>
            ))}
        </div>
    </div>
}

export default Project;