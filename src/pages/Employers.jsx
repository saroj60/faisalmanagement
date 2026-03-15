import React, { useState } from 'react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import TextArea from '../components/ui/TextArea';
import { CheckCircle } from 'lucide-react';

const Employers = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        industry: '',
        requirements: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const phoneNumber = '9779827703356';
        const text = `*New Manpower Request*%0A%0A*Company:* ${formData.companyName}%0A*Contact Person:* ${formData.contactPerson}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Industry:* ${formData.industry}%0A*Requirements:* ${formData.requirements}`;
        
        window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
    };

    return (
        <>
            <div className="bg-primary text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Hire Top Talent</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Partner with us to meet your manpower requirements efficiently.
                    </p>
                </div>
            </div>

            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    <div>
                        <h2 className="text-3xl font-bold text-primary mb-6">Request Manpower</h2>
                        <p className="text-gray-600 mb-8">
                            Fill out the form below to let us know your requirements. Our team will get back to you within 24 hours.
                        </p>

                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Input 
                                    label="Company Name" 
                                    name="companyName"
                                    placeholder="Enter company name" 
                                    required
                                    value={formData.companyName}
                                    onChange={handleChange}
                                />
                                <Input 
                                    label="Contact Person" 
                                    name="contactPerson"
                                    placeholder="Enter full name" 
                                    required
                                    value={formData.contactPerson}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Input 
                                    label="Email Address" 
                                    type="email" 
                                    name="email"
                                    placeholder="name@company.com" 
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <Input 
                                    label="Phone Number" 
                                    name="phone"
                                    placeholder="+971 50 000 0000" 
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <Input 
                                label="Industry" 
                                name="industry"
                                placeholder="e.g. Construction, Hospitality" 
                                required
                                value={formData.industry}
                                onChange={handleChange}
                            />
                            <TextArea 
                                label="Requirements Details" 
                                name="requirements"
                                placeholder="Describe the number of workers, job roles, and specific skills needed..." 
                                required
                                value={formData.requirements}
                                onChange={handleChange}
                            />

                            <Button size="lg" className="w-full" type="submit">Submit Request</Button>
                        </form>
                    </div>

                    <div>
                        <Card className="p-8 bg-gray-50 h-full">
                            <h3 className="text-2xl font-bold text-primary mb-6">Our Recruitment Process</h3>
                            <div className="space-y-8">
                                {[
                                    { title: 'Requirement Analysis', desc: 'We understand your needs and job specifications.' },
                                    { title: 'Sourcing & Screening', desc: 'We find and reject/shortlist candidates from our pool.' },
                                    { title: 'Interview & Selection', desc: 'You interview the shortlisted candidates.' },
                                    { title: 'Documentation & Visa', desc: 'We handle all legal and travel documentation.' },
                                    { title: 'Deployment', desc: 'Workers are deployed to your project site.' }
                                ].map((step, index) => (
                                    <div key={index} className="flex">
                                        <div className="mr-4 flex flex-col items-center">
                                            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                                                {index + 1}
                                            </div>
                                            {index < 4 && <div className="h-full w-0.5 bg-gray-300 my-1"></div>}
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-primary">{step.title}</h4>
                                            <p className="text-sm text-gray-600">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>

                </div>
            </Section>
        </>
    );
};

export default Employers;
