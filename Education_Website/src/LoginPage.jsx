import React, {useState} from "react";
import {signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';


function LoginPage (){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    
    const handleLogin = async (e) => {
        e.preventDefault();
        try{
            await signInWithEmailAndPassword(auth, email, password);
            navigate ('/profile-setup');
        }catch (err) {
            setError('Invalid email or password');

        }
    };
    return ( 
        <div className="login-page">
            <div className="login-box">
                <h2>Login to Brainpair</h2>
                <form onSubmit={handleLogin}>
                    <input type="email" placeholder="Email"
                    value={email} onChange ={(e) => setEmail(e.target.value)}
                    required/>
                    <input type="password" placeholder="Password"
                    value={password} onChange ={(e) => setPassword(e.target.value)}
                    required/>
                    <button className="login-btn" type="submit">Login</button>
                </form>
                {error && <p className ="error-text">{error}</p>}
                <button className="login-link" onClick={() => navigate('./forgot-password')}>
                    Forgot Password</button>
                <div className="oauth-button">
                    <button className="google-btn2">Google</button>
                    <button className="microsoft-btn2">Microsoft</button>
                </div>
            </div>

        </div>
    );
}
export default LoginPage;