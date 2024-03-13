import React, { useState } from 'react'

const Login = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    // const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setLogin(e.target.value);
    // }
    // очищаем инпут
    const handleClickClear = () => {
        setLogin('');
        setPassword('');
    }

    const handleClickLogin = () => {
        //TODO
        alert(`Login:`)
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
            <button onClick={handleClickLogin}>Login</button>
            <button onClick={handleClickClear}>Clear</button>

        </>
    )
}

export default Login