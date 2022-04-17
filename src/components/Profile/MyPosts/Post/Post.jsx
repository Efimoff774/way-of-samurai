import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  // debugger;

  return (
    <div className={classes.item}>
      <img src="https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg"></img>
      {props.message}
      <div>
        <span>like</span>
        <span>{props.likeCount}</span>
      </div>
    </div>
  );
};

export default Post;
