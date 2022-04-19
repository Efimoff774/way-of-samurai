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

const postElements = postData.map(post => (
  <Post key={`${post.message}${post.id}`} message={post.message} likeCount={post.likeCount} />
))

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
      <div className={classes.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
