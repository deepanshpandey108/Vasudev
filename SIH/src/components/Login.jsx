import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle login logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="login-container">

            <div className="login-box">
                <div className='heading'><img src="https://apps.mgov.gov.in/Developer/falseData/mSeva.jpeg" alt="" /><h2>Company Login</h2></div>
                <button className='mobile'>Login using mobile</button>
                <div class="separator">
    <div className="line"></div>
    <span className="text">or</span>
    <div className="line"></div>
</div>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input placeholder='Enter your email'
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input placeholder='Enter password'
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button  type="submit">Login</button>
                </form>
            </div>

        </div>
    );
};

export default Login;
