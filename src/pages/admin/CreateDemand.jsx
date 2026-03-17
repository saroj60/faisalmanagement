import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import Section from '../../components/ui/Section';
import API_BASE_URL from '../../config/api';
import ChangePasswordModal from '../../components/admin/ChangePasswordModal';
import { useAuth } from '../../context/AuthContext';

const CreateDemand = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();
    const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        country: '',
        startDate: '',
        endDate: '',
        salary: '',
        workers: '',
        description: '' // Optional description
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/admin/login');
            return;
        }

        try {
            const response = await fetch(`${API_BASE_URL}/api/demands`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Demand Created Successfully!');
                navigate('/demands');
            } else {
                setError('Failed to create demand');
            }
        } catch (err) {
            setError('Server error');
        }
    };

    return (
        <Section>
            <div className="max-w-2xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <Input label="Admin Dashboard" value="Create New Demand" readOnly className="font-bold text-xl border-none p-0 flex-1" />
                    <div className="flex space-x-4">
                        <Button 
                            variant="outline" 
                            onClick={() => setIsPasswordModalOpen(true)}
                            className="whitespace-nowrap"
                        >
                            Change Password
                        </Button>
                        <Button 
                            variant="outline" 
                            onClick={() => {
                                logout();
                                navigate('/admin/login');
                            }}
                            className="whitespace-nowrap text-red-600 border-red-200 hover:bg-red-50"
                        >
                            Logout
                        </Button>
                    </div>
                </div>

                <Card className="p-8 border border-gray-100 shadow-lg">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <Input
                            label="Demand Name"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="e.g. Construction Worker"
                            required
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input
                                label="Country"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                placeholder="e.g. Dubai, UAE"
                                required
                            />
                            <Input
                                label="Salary"
                                name="salary"
                                value={formData.salary}
                                onChange={handleChange}
                                placeholder="e.g. AED 1500"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input
                                label="Start Date"
                                type="date"
                                name="startDate"
                                value={formData.startDate}
                                onChange={handleChange}
                                required
                            />
                            <Input
                                label="End Date"
                                type="date"
                                name="endDate"
                                value={formData.endDate}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <Input
                            label="No. of Workers"
                            type="number"
                            name="workers"
                            value={formData.workers}
                            onChange={handleChange}
                            placeholder="e.g. 50"
                            required
                        />

                        {error && <p className="text-red-500">{error}</p>}

                        <Button size="lg" className="w-full" type="submit">Create Demand</Button>
                    </form>
                </Card>
            </div>
            
            <ChangePasswordModal 
                isOpen={isPasswordModalOpen} 
                onClose={() => setIsPasswordModalOpen(false)} 
            />
        </Section>
    );
};

export default CreateDemand;
