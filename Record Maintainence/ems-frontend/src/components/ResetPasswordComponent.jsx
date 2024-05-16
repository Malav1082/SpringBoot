import React, { useState } from 'react';

const ResetPasswordComponent = () => {
    const [username, setUsername] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Check if new passwords match
            if (newPassword !== confirmNewPassword) {
                throw new Error('New passwords do not match');
            }

            // Call reset password API
            await resetPassword(username, oldPassword, newPassword);
            setMessage('Password reset successfully');
        } catch (error) {
            setError(error.message);
        }

        setLoading(false);
    };

    return (
        <div className="container">
            <h2>Reset Password</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label>Old Password:</label>
                    <input type="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
                </div>
                <div>
                    <label>New Password:</label>
                    <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                </div>
                <div>
                    <label>Confirm New Password:</label>
                    <input type="password" value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} />
                </div>
                <button type="submit" disabled={loading}>Reset Password</button>
                {message && <div>{message}</div>}
                {error && <div>{error}</div>}
            </form>
        </div>
    );
};

export default ResetPasswordComponent;
