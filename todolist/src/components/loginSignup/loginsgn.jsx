import React, {useState}from 'react'
import './loginsg.css';
import user_img from '../Assets/user-image.png';
import email_img from '../Assets/email-image.png'
import eye_img from '../Assets/eye-image.png'
const LoginSignup = () => {
    const [action, setAction] = useState("Sign Up")
    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underLine"></div>
            </div>
            {/* input sections */}
            <div className="inputs">
                {action ==="Login"? <div></div> : <div className="input">
                    <img src={user_img} alt="" />
                    <input type="text" placeholder='Name'/>
                </div>}
            </div>
             {/* email  */}
            <div className="inputs">
                <div className="input">
                    <img src={email_img} alt="" />
                    <input type="email" placeholder='Email'/>
                </div>
            </div>
            {/* password */}
            <div className="inputs">
                <div className="input">
                    <img src={eye_img} alt="" />
                    <input type="password" placeholder='Password'/>
                </div>
            </div>
            {action === "Sign Up" ? <div></div> : <div className="forgot-pws">Forgot password? <span>Click here</span></div>}
            
            <div className="submit-container">
                <div className={action === "Login"? "submit gray": "submit"} onClick={() =>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action === "Sign Up"? "submit gray": "submit"} onClick={() =>{setAction("Login")}}>Login</div>
            </div>
        </div>
    )

}
export default LoginSignup