import React, {useState} from 'react'
import './ForgotPassword.css'
import Logo from '../../assets/logo.png'
import Rec from '../../assets/Rectangle2.png'

const ForgotPassword = () => {
    
    const [email, setEmail] = useState("")

    return (
        <div>
            <div className="container-forgot">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="in-container-forgot">
                            <div className="img-logo">
                                <img src={Logo} alt="logo" />
                            </div>
                            <div className="text">
                                <text className='F-password'>Forgot Password</text>
                                <p className="text-paragraph">Please fill in the email field below,
                                    we’ll send you an email to reset your password.
                                </p>
                            </div>
                            <div className="form">
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label label-text">Email</label>
                                    <input type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Onaivi@gmail.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="button">
                                    <button type="Submit" className="btn-send">Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src={Rec} alt="Rectangle food pic" className='img-fluid' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword
