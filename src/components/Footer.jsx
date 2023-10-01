import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-row">
                    <div className="social-icons">
                        <div className="social-icon-bk">
                            <a href="https://github.com/hayrulla2130">
                            <GitHubIcon className="icon-size" />
                            </a>
                        </div>
                        <div className="social-icon-bk">
                            <a href="https://www.linkedin.com/in/hayrulla-ibadullayev-158a76284/">
                            <LinkedInIcon className="icon-size" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="cv"><a href="https://drive.google.com/file/d/1D5LIYXpHHzSxpGXIFpBpiCLoyhjLfQ1z/view?usp=sharing" className="croissant-font">CV</a></h3>
                        <div className="mail">hayrulla.ibadullayev@std.yildiz.edu.tr</div>
                    </div>
                </div>
                <div className="copyright">
                    © HAYRULLA IBADULLAYEV 2023
                </div>
            </div>
        </div>
    )
}

export default Footer;