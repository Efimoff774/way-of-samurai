import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const postData = [
  { id: "1", message: "hello world", likeCount: "15" },
  { id: "2", message: "have a nice day", likeCount: "15" },
  { id: "3", message: "yo", likeCount: "15" },
  { id: "4", message: "yo", likeCount: "15" },
  { id: "5", message: "yo", likeCount: "15" },
];

const MyPosts = () => {
  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add post</button>
      </div>
      <div className={classes.posts}>
        <Post message={postData[0].message} likeCount={postData[0].likeCount} />
        <Post message={postData[1].message} likeCount={postData[1].likeCount} />
      </div>
    </div>
  );
};

export default MyPosts;
