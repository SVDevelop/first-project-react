import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
      <div className={s.content}>
      <div>
      <img src ="https://avatars.mds.yandex.net/i?id=2eeb65844afee5dc830414a1fc1e54c152628f4f-9242682-images-thumbs&n=13"></img>
      </div>
      <div>ava + description</div>
      <MyPosts/>
    </div>
    );
};

export default Profile;