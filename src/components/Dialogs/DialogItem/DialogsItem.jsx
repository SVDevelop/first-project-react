import React from "react";
import s from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

let DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return (
            <div className={s.dialog + " " + s.active}>
                <div>
                    <img src="https://www.clipartmax.com/png/full/247-2476955_png-file-star-wars-republic-symbol.png" alt="" />
                </div>
                <NavLink to={path} > {props.name}</NavLink>
            </div>
    );
};

export default DialogItem;