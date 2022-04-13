import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <div>
      <div className={classes.content}>
        <img src="https://picfiles.alphacoders.com/297/297577.jpg"></img>
      </div>
      <div>ava+description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
