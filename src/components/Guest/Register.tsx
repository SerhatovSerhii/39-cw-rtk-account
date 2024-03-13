import React, { useState } from 'react'

const Register = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    // const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setLogin(e.target.value);
    // }
    // очищаем инпут
    const handleClickClear = () => {
        setLogin('');
        setPassword('');
        setFirstName('');
        setLastName('');
    }

    const handleClickRegister = () => {
        //TODO register
        alert(`Register:`)
    }

    return (
        <>
            <label>
                Login:
                {/* onChange={e => setLogin(e.target.value.trim())} - создаем контролируемый компонент */}
                <input value={login} onChange={e => setLogin(e.target.value.trim())} type="text" />
            </label>

            <label>
                Password:
                <input value={password} onChange={e => setPassword(e.target.value.trim())} type="password" />
            </label>
            <label>
                FirstName:
                {/* onChange={e => setLogin(e.target.value.trim())} - создаем контролируемый компонент */}
                <input value={firstName} onChange={e => setFirstName(e.target.value.trim())} type="text" />
            </label>
            <label>
                LastName:
                {/* onChange={e => setLogin(e.target.value.trim())} - создаем контролируемый компонент */}
                <input value={lastName} onChange={e => setLastName(e.target.value.trim())} type="text" />
            </label>
            <button onClick={handleClickRegister}>Register</button>
            <button onClick={handleClickClear}>Clear</button>

        </>
    )
}

export default Register