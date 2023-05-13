import React, { useState } from 'react';
import './Registration.css';
import Logo from '../../assets/logo.png'
import Rec from '../../assets/Rectangle.png'
import { AiOutlineEye } from 'react-icons/ai'
import { AiOutlineEyeInvisible } from 'react-icons/ai'
import swal from 'sweetalert';

const Registration = () => {

    const [visible, setVisible] = useState(false)
    
    const [fName, setFName] = useState("")
    const [lName, setLName] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleVisible = () => {
        setVisible(!visible)
    }

    return (
        <div>
            <div className="container-reg">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="in-container">
                            <div className="img-logo">
                                <img src={Logo} alt="logo" />
                            </div>
                            <div className="text">
                                <text className='create'>Create an Account</text>
                                <p className="text-paragraph">Let's get you started with a 30 days free trial.</p>
                            </div>
                            <div className="form">
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label label-text">First Name</label>
                                    <input type="text"
                                        className="form-control"
                                        id="name"
                                        placeholder="Okomayin"
                                        value={fName}
                                        onChange={(e) => setFName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label label-text">Last Name</label>
                                    <input type="text"
                                        className="form-control"
                                        id="name"
                                        placeholder="Onaivi"
                                        value={lName}
                                        onChange={(e) => setLName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label label-text">Email</label>
                                    <input type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Onaivi@gmail.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
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
                                <input type="checkbox" className='input-check' /> <span className="terms-text">I agree to the terms & conditions</span>
                            </div>
                            <div className="button">
                                <button type="Submit" className="btn-sign">Sign up</button>
                            </div>
                            <div className='already'>
                                <span className="login-text">Already have an account? <span style={{ color: '#D21A32', fontWeight: 'bold', cursor: 'pointer' }}>Login</span></span>
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

export default Registration
