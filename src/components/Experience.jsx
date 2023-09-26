import React from "react";
import jobs from './data-experience';

function Experience() {
    return <div className="work-main-container">
            <div className="work-container">
                <h6 className="bio title">
                    WORK EXPERIENCE
                </h6>
                <div className="work-boxes">
                    {jobs.map(job => (
                        <div className="work-box">
                            <div className="circle" />
                            <div>{job.name}</div>
                            <div>{job.role}</div>
                            <div>{job.when}</div>
                            {/* <p>{job.about}</p> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
        }

export default Experience;