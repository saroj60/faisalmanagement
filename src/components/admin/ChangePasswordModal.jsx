import React, { useState } from 'react';
import { X } from 'lucide-react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import Card from '../ui/Card';
import API_BASE_URL from '../../config/api';

const ChangePasswordModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    if (!isOpen) return null;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (formData.newPassword !== formData.confirmNewPassword) {
            setError('New passwords do not match');
            return;
        }

        if (formData.newPassword.length < 6) {
            setError('New password must be at least 6 characters long');
            return;
        }

        setIsLoading(true);
        const token = localStorage.getItem('token');

        try {
            const response = await fetch(`${API_BASE_URL}/api/auth/change-password`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    currentPassword: formData.currentPassword,
                    newPassword: formData.newPassword
                })
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess('Password changed successfully!');
                setFormData({ currentPassword: '', newPassword: '', confirmNewPassword: '' });
                // Optional: Close modal after a short delay
                setTimeout(() => onClose(), 2000);
            } else {
                setError(data.message || 'Failed to change password');
            }
        } catch (err) {
            setError('Server error while changing password');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
            <Card className="w-full max-w-md relative p-6">
                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none"
                    aria-label="Close"
                >
                    <X size={24} />
                </button>
                
                <h2 className="text-2xl font-bold text-primary mb-6">Change Password</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        label="Current Password"
                        type="password"
                        name="currentPassword"
                        value={formData.currentPassword}
                        onChange={handleChange}
                        required
                    />
                    <Input
                        label="New Password"
                        type="password"
                        name="newPassword"
                        value={formData.newPassword}
                        onChange={handleChange}
                        required
                    />
                    <Input
                        label="Confirm New Password"
                        type="password"
                        name="confirmNewPassword"
                        value={formData.confirmNewPassword}
                        onChange={handleChange}
                        required
                    />
                    
                    {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
                    {success && <div className="text-green-500 text-sm mt-2">{success}</div>}
                    
                    <div className="pt-4 flex justify-end space-x-3">
                        <Button type="button" variant="outline" onClick={onClose} className="border-gray-300 text-gray-700 hover:bg-gray-50">
                            Cancel
                        </Button>
                        <Button type="submit" disabled={isLoading}>
                            {isLoading ? 'Updating...' : 'Change Password'}
                        </Button>
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default ChangePasswordModal;
