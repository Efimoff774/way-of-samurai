import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        {/* по итогу возвратит нам тег a с атрибутом href */}
        <NavLink to="/Profile">Profile</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="Dialogs">Messages</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="News">News</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="Music">Music</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="Settings">Settings</NavLink>
      </div>
    </nav>
  );
};

export default Nav;
