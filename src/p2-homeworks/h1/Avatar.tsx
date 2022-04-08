import React from 'react'
import s from './Avatar.module.css'

type AvatarType = {
    avatar: string,
}

const Avatar = (props: AvatarType) => {
    return (
         <div>
             <img className={s.ava} src={props.avatar} />
        </div>
    )
}

export default Avatar
