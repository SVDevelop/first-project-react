import React from "react";
import s from "./Post.module.css";

const Post = () => {
  return (
    <div className={s.item}>
      <img src="https://avatars.mds.yandex.net/i?id=c833930458415c951ebf066864887028731904b9-9211526-images-thumbs&n=13" alt="Avatarka" />
      Post 1
      <div> <span>like</span> </div>
    </div>
  );
};

export default Post;