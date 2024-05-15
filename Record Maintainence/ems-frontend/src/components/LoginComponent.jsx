import React, { useState } from 'react';
import { login } from '../services/UserService';
import { useNavigate } from 'react-router-dom';

const LoginComponent = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigator = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await login({ username, password });
            navigator('/dashboard'); // Navigate to dashboard on successful login
        } catch (error) {
            setError('Invalid username or password');
        }

        setLoading(false);
    };

    return (
        <div className="container">
            <h2 className='text-center'>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" disabled={loading}>Login</button>
                {error && <div>{error}</div>}
            </form>
        </div>
    );
};

export default LoginComponent;
