// import React, { useState } from "react";
// import { GoogleLogin } from '@react-oauth/google';

// const client_ID = "351415201045-nb73cnb8ri882t8b8hjnrbdba1dr0c4f.apps.googleusercontent.com";

// export const Login = (props) => {
//     const [email, setEmail] = useState('');
//     const [pass, setPass] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(email)
//     };

//     const onSuccess = () => {
//         console.log("LOGIN SUCCESS! Current user: ", res.profileObj)
//     };

//     const onFailure = () => {
//         console.log("LOGIN FAILED!", res);
//     }
    
//     return (
//         <div className="auth-form-container">
//             <div className="google-sign-in">
//                 <GoogleLogin
//                     clientID={client_ID}
//                     buttonText="Login"
//                     onSuccess={onSuccess}
//                     onFailure={onFailure}
//                     cookiePolicy={'single_host_origin'}
//                     isSignedIn={true}
//                 />;
//             </div>
            
//             <form onSubmit={handleSubmit}>
//             <label htmlFor="email">Email</label>
//             <input value={email} type="email" placeholder="youremail@gmail.com" name="email"/>
//             <label htmlFor="password">Password</label>
//             <input value={pass} type="password" placeholder="********" id="password"name="password"/>
//             <button>Log In</button>
//             </form>
//             <button onClick={() => props.onFormSwitch('register')}>Don't have an account? Register.</button>
//         </div>
        
//     );
// }