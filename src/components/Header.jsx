import React from "react";
import backgroundImage from '../image/background.jpg';

function Header() {
    return <div className="header">
        <div className="header" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
    </div>
}

export default Header;