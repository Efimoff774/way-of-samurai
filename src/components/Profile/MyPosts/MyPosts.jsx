import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={classes.posts}>
        <Post text="hello world" likeCount="15" />
        <Post text="qwer" likeCount="20" />
      </div>
    </div>
  );
};

export default MyPosts;
