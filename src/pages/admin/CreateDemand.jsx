import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import Section from '../../components/ui/Section';

const CreateDemand = () => {
    const navigate = useNavigate();
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
            const response = await fetch('/api/demands', {
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
                <Input label="Admin Dashboard" value="Create New Demand" readOnly className="mb-6 font-bold text-xl border-none p-0" />
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
        </Section>
    );
};

export default CreateDemand;
