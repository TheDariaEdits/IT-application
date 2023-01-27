// import React, { useState } from "react";

// export const Register = () => {
//     const [email, setEmail] = useState('');
//     const [pass, setPass] = useState('');
//     const [name, setName] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(email);
//     }

//     return (
//         <div className="auth-form-container">
//             <form onSubmit={handleSubmit}>
//             <label htmlFor="Full Name">Full Name</label>
//             <input value={name} type="text"  name="name" id="name"/>
//             <label htmlFor="email">Email</label>
//             <input value={email} type="email" placeholder="youremail@gmail.com" name="email"/>
//             <label htmlFor="password">Password</label>
//             <input value={pass} type="password" placeholder="********" id="password"name="password"/>
//             <button>Register</button>
//             </form>
          
//         </div>
//     );
// }