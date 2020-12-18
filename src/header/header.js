import './header.css';
import HeaderBanner from "./headerBanner";
import React from 'react';
import HeaderNavbar from "./headerNavbar";
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <div className="header">
        <div className="header-banner">
            <HeaderBanner/>
        </div>
        <div className="header-navbar">
            <HeaderNavbar/>
        </div>
    </div>
  );
}

export default Header;
