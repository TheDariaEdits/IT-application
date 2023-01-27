import React from "react";
import googleImage from "../assets/googleImage.png"

const Login = () => {

    const googleLogin = () => {
        window.open("http://localhost:4000/auth/google", "_self");
    }
    
    return(
        <div className="login-page w-screen flex flex-col items-center justify-center">
            <div className="login-form w-screen flex flex-col items-center justify-center max-w-xl min-w-[40vw]">
                <h1>Login</h1>
                <div className="google-container flex content-center justify-center items-center w-80 h-14 bg-blue-500 relative text-white text-sm m-10 cursor-pointer" onClick={googleLogin}>
                    <img src={googleImage} alt="Google Icon" className="w-1/6 h-full object-contain left-10 rounded-sm absolute"/>
                    <p>Login with Google</p>
                </div>
            </div>
        </div>
    )
    
}

export default Login;