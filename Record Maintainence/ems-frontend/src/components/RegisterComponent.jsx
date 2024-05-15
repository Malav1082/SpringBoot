import React, { useState } from 'react';
import { register } from '../services/UserService';
import { useNavigate } from 'react-router-dom';

const RegistrationComponent = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigator = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Check if passwords match
            if (password !== confirmPassword) {
                throw new Error('Passwords do not match');
            }

            // Call register API
            await register({ username, password });
            navigator('/login'); // Redirect to login page after successful registration
        } catch (error) {
            setError(error.message);
        }

        setLoading(false);
    };

    return (
        <div className="container">
            <h2>Registration</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <button type="submit" disabled={loading}>Register</button>
                {error && <div>{error}</div>}
            </form>
        </div>
    );
};

export default RegistrationComponent;
