import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'

const Guest = () => {
    const [isLogin, setIsLogin] = useState(true)
    return (
        <div>
            {isLogin ? <Login /> : <Register />}
            {/* <button onClick={() => setIsLogin(prevState => !prevState)}> */}
            <button onClick={() => setIsLogin(!isLogin)}>
                Switch to {isLogin ? 'Register' : 'Login'}
            </button>
        </div>
    )
}

export default Guest