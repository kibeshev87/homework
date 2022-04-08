import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    onEnter: (event: KeyboardEvent<HTMLInputElement>) => void
    error: string // need to fix any
    totalUsers: number // need to fix any
}
//export const Greeting = (props: GreetingPropsType) => {
// презентационная компонента (для верстальщика)

export const Greeting: React.FC<GreetingPropsType> = ({name, setNameCallback, addUser, onEnter, error, totalUsers}) => {

    const inputClass = error ? s.errorInput : s.input // need to fix with (?:)

    return (
        <div className={s.greeting}>
            <div>
                <input value={name}
                       onChange={setNameCallback}
                       className={inputClass}
                       onKeyDown={onEnter}
                       onBlur={setNameCallback}
                />
                <div className={s.error}>{error}</div>
            </div>

            <button onClick={addUser} className={s.button} disabled={!name}>add</button>
            <div className={s.count}>{totalUsers}</div>
        </div>
    )
}
