import React from 'react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import TextArea from '../components/ui/TextArea';
import { Mail, Phone, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../utils/constants';

import corporateImg from '../assets/industries/corporate.png';

const Contact = () => {
    return (
        <>
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
                        <Card className="p-6 transition-shadow duration-300 hover:shadow-md">
                            <div className="flex items-start">
                                <MapPin className="text-accent mr-4 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-primary mb-1">Nepal office</h3>
                                    <p className="text-gray-600 text-sm">{COMPANY_INFO.address}</p>
                                </div>
                            </div>
                        </Card>
                        <Card className="p-6 transition-shadow duration-300 hover:shadow-md">
                            <div className="flex items-center">
                                <Phone className="text-accent mr-4 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-primary mb-1">Phone</h3>
                                    <p className="text-gray-600 text-sm">{COMPANY_INFO.phone}</p>
                                </div>
                            </div>
                        </Card>
                        <Card className="p-6 transition-shadow duration-300 hover:shadow-md">
                            <div className="flex items-center">
                                <Mail className="text-accent mr-4 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-primary mb-1">Email</h3>
                                    <p className="text-gray-600 text-sm">{COMPANY_INFO.email}</p>
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
                            <form className="space-y-6" action="https://formsubmit.co/faisalmanagementservicess@gmail.com" method="POST">
                                <input type="hidden" name="_captcha" value="false" />
                                <input type="hidden" name="_subject" value="New Contact Inquiry from Website" />
                                <input type="hidden" name="_next" value="http://localhost:5173/contact" />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Input label="Your Name" name="name" placeholder="Enter your name" required />
                                    <Input label="Email Address" type="email" name="email" placeholder="name@example.com" required />
                                </div>
                                <Input label="Subject" name="subject" placeholder="Inquiry about..." required />
                                <TextArea label="Message" name="message" placeholder="Your message here..." rows={6} required />
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
