import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://avatars.mds.yandex.net/i?id=c833930458415c951ebf066864887028731904b9-9211526-images-thumbs&n=13" alt="Avatarka" />
      {props.message};
      <div> <span>like</span> {props.like} </div>
    </div>
  );
};

export default Post;