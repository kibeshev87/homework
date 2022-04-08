import React from 'react'
import s from './Message.module.css'
import a from "./Avatar.module.css";

type MessageType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

function Message(props: MessageType) {
    return (
        <div className={s.message}>
            <div className={s.messageInner}>
                <div className={s.imgWrapper}>
                    <img src={props.avatar}/>
                </div>

                <div className={s.cloud}>
                    <div>{props.name}</div>
                    <div>{props.message}</div>
                    <div className={s.time}>{props.time}</div>
                </div>
            </div>
        </div>
    )
}

export default Message
