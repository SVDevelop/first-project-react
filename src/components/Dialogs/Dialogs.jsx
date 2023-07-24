import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

let DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={path} > {props.name}</NavLink>
        </div>
    );
};

let Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
};

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem className="dialog" name="Dima" id="1" />
                <DialogItem name="Valera" id="2" />
                <DialogItem name="Sasha" id="3" />
                <DialogItem name="Maxim" id="4" />
            </div>
            <div className={s.messages}>
                <Message message = "Hi"/>
                <Message message = "Hi is are you?"/>
                <Message message = "Y"/>
            </div>
        </div>

    );
};


export default Dialogs;