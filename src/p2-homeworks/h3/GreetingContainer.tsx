import React, {KeyboardEvent, ChangeEvent, useState} from 'react'
import {Greeting} from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
//export function GreetingContainer(props: GreetingContainerPropsType) {
// более современный и удобный для про :)
// уровень локальной логики
export const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов

    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any


    const setNameCallback = (event: ChangeEvent<HTMLInputElement>) => {
        const trimmedName = event.currentTarget.value.trim()

        if (trimmedName) {
            setName(trimmedName)
            error && setError('')
        } else {
            name && setName('')
            setError('name is require!')
        }
    }

    const addUser = () => {
        addUserCallback(name)
        alert(`Hello ${name} !`)
        setName('')
    }

    const onEnter = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && name) {
            addUser()
        }
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

