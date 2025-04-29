import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';

function Register (){
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const navigate = useNavigate();
    const handleRegister = async (e) => {
        e.preventDefault();
        try{
            await createUserWithEmailAndPassword(auth,email,password);
            navigate('/profile-setup');
        }catch(err){
            setError(err.message);
        }
    };
    return (
        <div className="register-page">
            <div className="form-box">
                <h2>Create an Account</h2>
                <form onSubmit={handleRegister}>
                    <input type ="text" placeholder="Full Name"
                    value={fullName} 
                    onChange={(e) => setFullName(e.target.value)}
                    required />
                    <input type ="email" placeholder="Email"
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    required />
                    <input type ="password" placeholder="Password"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    required />
                    <button className ="register-btn" type="submit">Register</button>
                </form>
                {error && <p className="error-text">{error}</p> }
                <p className="login-link"> Already have an account? <a href="/login">Login</a></p>
                <div className ="oauth-buttons">
                    <button className="google-btn">Google</button>
                    <button className="microsoft-btn">Microsoft</button>
                </div>
            </div>

        </div>
    
    );

}
export default Register;