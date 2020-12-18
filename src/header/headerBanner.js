import RSreLogo from "./images/RSreLogo.png";
import './headerBanner.css';
import React from "react";

function HeaderBanner() {
    return(
        <header className="banner">
            <img src={RSreLogo} className="banner-logo" alt="Logo"/>
        </header>
    );
}

export default HeaderBanner;