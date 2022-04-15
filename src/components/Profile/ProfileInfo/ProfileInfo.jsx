import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <div className={classes.content}>
        <img src="https://picfiles.alphacoders.com/297/297577.jpg"></img>
      </div>
      <div className={classes.descriptionBlock}>ava+description</div>
    </div>
  );
};

export default ProfileInfo;
