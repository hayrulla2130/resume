import React from "react";
import image from '../image/profile.jpg';

function Bio() {
    return <div id="bio" style={{ paddingTop: "60px", marginTop: "-60px" }}>
        <div className="bio-container">
            <h6 className="bio title">
                HAYRULLA'S BIO
            </h6>
            <h3 id='about' className="bio croissant-font ">
                ABOUT HAYRULLA IBADULLAYEV.
            </h3>
            <div className="bio profile-container">
                <img src={image}/>
                <div className="text">Since my high school years, I have been actively involved in software and graphic design due to my interest in technology. During my student years, I achieved significant success in the competitions I participated in. The experiences I gained during this time made me an individual who is always one step ahead of technological developments, research-driven, and innovative.
                    <br />
                    <br />
                    My ability to manage a project from start to finish, my analytical thinking skills, and my attention to detail have led me to success in many projects. Throughout this process, I have developed the ability to work individually and, with effective communication within a team, have gained experience in successfully completing projects.
                    <br />
                    <br />
                    I am aware that the world of software and design is a constantly changing and evolving field. For this reason, I have attended various courses and training to keep myself updated and continue learning. My goal is to use my talents and experiences to make tangible contributions to the business world and contribute to technological advancements.</div>
            </div>
        </div>
    </div>
}

export default Bio;