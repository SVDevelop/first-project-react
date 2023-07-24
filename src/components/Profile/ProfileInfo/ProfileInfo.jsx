import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://avatars.mds.yandex.net/i?id=2eeb65844afee5dc830414a1fc1e54c152628f4f-9242682-images-thumbs&n=13"></img>
      </div>
      <div className={s.descriptionBlock}>ava + description</div>
    </div>
  );
};

export default ProfileInfo; 