import React, { useState } from 'react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import TextArea from '../components/ui/TextArea';
import { Mail, Phone, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../utils/constants';

import corporateImg from '../assets/industries/corporate.png';
import SEO from '../components/common/SEO';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
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
        const text = `*New Contact Inquiry*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Subject:* ${formData.subject}%0A*Message:* ${formData.message}`;
        
        window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
    };

    return (
        <>
            <SEO 
                title="Contact Us - Manpower Consultancy Office in Kathmandu"
                description="Contact Faisal Management Services in Pinglasthan-9, Kathmandu, Nepal. Reach our recruitment team via phone, email, or WhatsApp for overseas manpower inquiries."
                keywords="Contact Faisal Management, Manpower Office Kathmandu, Recruitment Agency Pinglasthan, Nepal Manpower Phone Number"
                canonicalPath="/contact"
            />
            <div className="relative bg-gray-50 py-24 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={corporateImg}
                        alt="Contact Background"
                        className="w-full h-full object-cover opacity-5"
                    />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Contact Us</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Get in touch with us for any inquiries or support.
                    </p>
                </div>
            </div>

            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    <div className="lg:col-span-1 space-y-6">
                        {/* Kuwait Office Card - Highlighted */}
                        <Card className="p-6 transition-all duration-300 hover:shadow-lg border-2 border-primary/20 bg-gradient-to-br from-blue-50/50 via-white to-white relative overflow-hidden">
                            <div className="flex items-start">
                                <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center mr-4 shrink-0 shadow-sm">
                                    <MapPin size={20} />
                                </div>
                                <div className="space-y-2 flex-1">
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-bold text-primary text-base">Kuwait Office 🇰🇼</h3>
                                        <span className="text-[10px] font-mono bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full font-bold">
                                            C.R. {COMPANY_INFO.kuwaitOffice.crNumber}
                                        </span>
                                    </div>
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        {COMPANY_INFO.kuwaitOffice.address}
                                    </p>
                                    <div className="pt-2 border-t border-gray-100 space-y-1.5 text-xs text-gray-600">
                                        <div className="flex items-center">
                                            <Phone size={14} className="text-accent mr-2 shrink-0" />
                                            <a href={`tel:${COMPANY_INFO.kuwaitOffice.phone.replace(/\s+/g, '')}`} className="font-semibold text-primary hover:underline">
                                                {COMPANY_INFO.kuwaitOffice.phone}
                                            </a>
                                        </div>
                                        <div className="flex items-center">
                                            <Mail size={14} className="text-accent mr-2 shrink-0" />
                                            <a href={`mailto:${COMPANY_INFO.kuwaitOffice.email}`} className="text-gray-600 hover:text-primary hover:underline">
                                                {COMPANY_INFO.kuwaitOffice.email}
                                            </a>
                                        </div>
                                        <p className="text-[11px] text-gray-500 pt-1">
                                            <strong>Director:</strong> {COMPANY_INFO.kuwaitOffice.managingDirector} ({COMPANY_INFO.kuwaitOffice.title})
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* Nepal Headquarters Card */}
                        <Card className="p-6 transition-shadow duration-300 hover:shadow-md">
                            <div className="flex items-start">
                                <MapPin className="text-accent mr-4 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h3 className="font-bold text-primary mb-1">Nepal Head Office 🇳🇵</h3>
                                    <p className="text-gray-600 text-sm mb-2">{COMPANY_INFO.address}</p>
                                    <div className="space-y-1 text-xs text-gray-600">
                                        <p className="flex items-center">
                                            <Phone size={13} className="text-accent mr-2 shrink-0" />
                                            <a href="tel:+97714592271" className="hover:underline">{COMPANY_INFO.phone}</a>
                                        </p>
                                        <p className="flex items-center">
                                            <Mail size={13} className="text-accent mr-2 shrink-0" />
                                            <a href={`mailto:${COMPANY_INFO.email}`} className="hover:underline">{COMPANY_INFO.email}</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* Global Branches */}
                        <Card className="p-6 transition-shadow duration-300 hover:shadow-md">
                            <div className="flex items-start">
                                <MapPin className="text-accent mr-4 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-primary mb-2">Other Global Branches</h3>
                                    <ul className="text-gray-600 text-sm space-y-1">
                                        <li>UAE / Dubai</li>
                                        <li>Qatar</li>
                                        <li>Saudi Arabia</li>
                                        <li>India</li>
                                        <li>Bangladesh</li>
                                    </ul>
                                </div>
                            </div>
                        </Card>

                        {/* Google Maps Embed Placeholder - using gray div */}
                        <div className="bg-gray-200 h-64 rounded-lg overflow-hidden relative">
                            <iframe
                                title="Google Map"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                scrolling="no"
                                marginHeight="0"
                                marginWidth="0"
                                src="https://maps.google.com/maps?q=Pinglasthan-9,+Bajreshwori+Marg,+Kathmandu,+Nepal&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            ></iframe>
                            <a
                                href="https://maps.app.goo.gl/Nbq7rjchHiTt9ffb8"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute bottom-2 right-2 bg-white text-primary text-xs px-2 py-1 rounded shadow hover:bg-gray-100"
                            >
                                View Large Map
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <Card className="p-8">
                            <h2 className="text-2xl font-bold text-primary mb-6">Send us a Message</h2>
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Input 
                                        label="Your Name" 
                                        name="name" 
                                        placeholder="Enter your name" 
                                        required 
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                    <Input 
                                        label="Email Address" 
                                        type="email" 
                                        name="email" 
                                        placeholder="name@example.com" 
                                        required 
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <Input 
                                    label="Subject" 
                                    name="subject" 
                                    placeholder="Inquiry about..." 
                                    required 
                                    value={formData.subject}
                                    onChange={handleChange}
                                />
                                <TextArea 
                                    label="Message" 
                                    name="message" 
                                    placeholder="Your message here..." 
                                    rows={6} 
                                    required 
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                                <Button size="lg" type="submit">Send Message</Button>
                            </form>
                        </Card>
                    </div>

                </div>
            </Section>
        </>
    );
};

export default Contact;
