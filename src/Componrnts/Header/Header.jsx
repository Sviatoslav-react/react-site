import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src="https://e7.pngegg.com/pngimages/87/656/png-clipart-web-development-computer-icons-website-world-wide-web-web-design-global-globe-network-planet-web-world-icon-round-white-and-blue-globe-logo-miscellaneous-search-engine-optimization-thumbnail.png" />
      <div className={s.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};
export default Header;
