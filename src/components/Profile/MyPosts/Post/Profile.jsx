import React from "react";
import s from "./Profile.module.css";

const Profile = () => {
    return (
      <div className={s.content}>
      <div>
      <img src ="https://avatars.mds.yandex.net/i?id=2eeb65844afee5dc830414a1fc1e54c152628f4f-9242682-images-thumbs&n=13"></img>
      </div>
      <div>ava + description</div>
      <div>my post
        <div>new post</div>
        <div className={s.posts}>
          <div className={s.item}>post1</div>
          <div className={s.item}>post2</div>
        </div>
      </div>
    </div>
    );
};

export default Profile;