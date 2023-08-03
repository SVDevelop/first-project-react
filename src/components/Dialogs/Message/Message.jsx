import React from "react";
import s from "./../Dialogs.module.css";

let Message = (props) => {
    return (
        <div className="messageChat">
            <div className={s.message}>
                <img src="https://cdn.icon-icons.com/icons2/1812/PNG/512/4213460-account-avatar-head-person-profile-user_115386.png" alt="icon profile" />
                {props.message}
            </div>
            <div className={s.secondMessages}>
                {props.message}
                <img src="https://cdn.icon-icons.com/icons2/1812/PNG/512/4213460-account-avatar-head-person-profile-user_115386.png" alt="icon profile" />
            </div>
        </div>

    );
};

export default Message;