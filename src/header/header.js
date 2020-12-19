import HeaderBanner from "./headerBanner";
import React from 'react';
import HeaderNavbar from "./headerNavbar";
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
      <React.Fragment>
          <HeaderBanner/>
          <HeaderNavbar/>
      </React.Fragment>
  );
}

export default Header;
