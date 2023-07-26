import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElement = props.posts.map(p =>
    <Post message={p.message} like={p.likesCount} />
  )

  return (
    <div className={s.postsBlock}>
      <h3>my post</h3>
      <div className={s.posts}>
        {postsElement}
      </div>
    </div>
  );
};

export default MyPosts;