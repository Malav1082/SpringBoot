import React, { useState } from 'react';

const ForgotPasswordComponent = () => {
    const [username, setUsername] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await forgotPassword(username);
            setMessage('Password reset instructions sent to your email');
        } catch (error) {
            setError('Failed to reset password');
        }

        setLoading(false);
    };

    return (
        <div className="container">
            <h2>Forgot Password</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <button type="submit" disabled={loading}>Reset Password</button>
                {message && <div>{message}</div>}
                {error && <div>{error}</div>}
            </form>
        </div>
    );
};

export default ForgotPasswordComponent;
