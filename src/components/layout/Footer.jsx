import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS, COMPANY_INFO } from '../../utils/constants';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#000000] text-white pt-16 pb-8" style={{ backgroundColor: '#000000' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

                    {/* Company Info */}
                    <div>
                        <h3 className="text-2xl font-bold font-heading mb-4">
                            {COMPANY_INFO.name}
                        </h3>
                        <p className="text-white mb-6 text-sm leading-relaxed">
                            Serving industries with skilled and unskilled manpower solutions. We connect talent with opportunity across the globe.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Linkedin size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Instagram size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-accent">Quick Links</h4>
                        <ul className="space-y-2">
                            {NAV_LINKS.map(link => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-white hover:text-gray-200 hover:pl-2 transition-all text-sm">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services (Static List for now) */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-accent">Our Services</h4>
                        <ul className="space-y-2 text-sm text-white">
                            <li><Link to="/services" className="hover:text-white">Skilled Manpower</Link></li>
                            <li><Link to="/services" className="hover:text-white">Overseas Recruitment</Link></li>
                            <li><Link to="/services" className="hover:text-white">HR Solutions</Link></li>
                            <li><Link to="/services" className="hover:text-white">Contract Staffing</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-accent">Contact Us</h4>
                        <ul className="space-y-4 text-sm text-white">
                            <li className="flex items-start">
                                <MapPin size={18} className="mr-3 text-accent flex-shrink-0 mt-0.5" />
                                <span>{COMPANY_INFO.address}</span>
                            </li>
                            <li className="flex items-center">
                                <Phone size={18} className="mr-3 text-accent flex-shrink-0" />
                                <span>{COMPANY_INFO.phone}</span>
                            </li>
                            <li className="flex items-center">
                                <Mail size={18} className="mr-3 text-accent flex-shrink-0" />
                                <span>{COMPANY_INFO.email}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link to="#" className="hover:text-white">Privacy Policy</Link>
                        <Link to="#" className="hover:text-white">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
