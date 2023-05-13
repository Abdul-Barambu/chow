import React from 'react'
import './success.css'
import Tick from '../../assets/tick2.jpg'

const Successful = () => {
    return (
        <div>
            <div className="container-tick">
                <div className="card-tick">
                    <img src={Tick} alt="success-img" className='img-tick' />
                    <p style={{color: 'white'}}>Signup complete</p>
                    <p className="sign-text">Signup complete</p>
                    <p className="text">Your account has been setup!<br />Login to continue.</p>
                    <button className="btn-done">Done</button>
                </div>
            </div>
        </div>
    )
}

export default Successful