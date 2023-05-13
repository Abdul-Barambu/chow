import React, { useState } from 'react'
import './Login.css'
import Logo from '../../assets/logo.png'
import Rec from '../../assets/Rectangle2.png'
import { AiOutlineEye } from 'react-icons/ai'
import { AiOutlineEyeInvisible } from 'react-icons/ai'

const Login = () => {

    const [visible, setVisible] = useState(false)
    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleVisible = () => {
        setVisible(!visible)
    }

    return (
        <div>
            <div className="container-login">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="in-container">
                            <div className="img-logo">
                                <img src={Logo} alt="logo" />
                            </div>
                            <div className="text">
                                <text className='welcome'>Welcome Back!</text>
                                <p className="text-paragraph">Let’s continue with your 30 days free trial.</p>
                            </div>
                            <div className="form">
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label label-text">Username</label>
                                    <input type="text"
                                        className="form-control"
                                        id="name"
                                        placeholder="Okomayin123"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label for="password" className="form-label label-text">Password</label>
                                    <input type={visible ? "text" : "password"}
                                        className="form-control"
                                        id="password" placeholder="**********"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <label htmlFor="icon" className='eye-icon' onClick={handleVisible}>{visible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}</label>
                                </div>
                            </div>
                            <div className="terms">
                                <input type="checkbox" className='input-check' /> <span className="remember-text">Remember me</span>
                                <span className='forgot-password'>Forgot password</span>
                            </div>
                            <div className="button">
                                <button type="Submit" className="btn-sign">Log In</button>
                            </div>
                            <div className='already'>
                                <span className="login-text">Don’t have an account? <span style={{ color: '#D21A32', fontWeight: 'bold', cursor: 'pointer' }}>Sign up</span></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={Rec} alt="Rectangle food pic" className='img-fluid' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
