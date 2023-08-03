import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d =>
        <DialogItem name={d.name} id={d.id} />
    );

    let messagesElements = props.state.messages.map(m =>
        <Message message={m.message} />
    );

    let sendNewMessage = React.createRef();

    let addSendMessage = () => {
        let newMessage = sendNewMessage.current.value;
        alert(newMessage)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements[0]}

                <div className={s.addmessage}>
                    <div>
                        <textarea ref={sendNewMessage}></textarea>
                    </div>
                    <div>
                        <button onClick={addSendMessage}>send message</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Dialogs;