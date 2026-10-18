import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS, COMPANY_INFO } from '../../utils/constants';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#000000] text-white pt-10 sm:pt-16 pb-8" style={{ backgroundColor: '#000000' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">

                    {/* Company Info */}
                    <div>
                        <h3 className="text-2xl font-bold font-heading mb-4">
                            {COMPANY_INFO.name}
                            <span className="block text-sm font-normal text-gray-400 mt-1">
                                (Formerly {COMPANY_INFO.formerName})
                            </span>
                        </h3>
                        <p className="text-white mb-6 text-sm leading-relaxed">
                            Serving industries with skilled and unskilled manpower solutions. We connect talent with opportunity across the globe.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/share/1BRyNVwXkE/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="hidden text-gray-400 hover:text-accent transition-colors"><Twitter size={20} /></a>
                            <a href="https://www.linkedin.com/in/jay-shah-572639235?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors"><Linkedin size={20} /></a>
                            <a href="#" className="hidden text-gray-400 hover:text-accent transition-colors"><Instagram size={20} /></a>
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

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-accent">Our Services</h4>
                        <ul className="space-y-2 text-sm text-white">
                            <li><Link to="/kuwait-manpower-supply" className="hover:text-accent font-semibold text-amber-300">Kuwait Manpower Supply 🇰🇼</Link></li>
                            <li><Link to="/uae-manpower-supply" className="hover:text-accent font-semibold text-emerald-400">UAE Manpower Supply 🇦🇪</Link></li>
                            <li><Link to="/services" className="hover:text-white">Skilled & Professional Manpower</Link></li>
                            <li><Link to="/services" className="hover:text-white">Overseas Recruitment Nepal</Link></li>
                            <li><Link to="/services" className="hover:text-white">Trade Testing & Screening</Link></li>
                            <li><Link to="/uae-manpower-supply#demand-form" className="hover:text-white">Hire For UAE (Employer)</Link></li>
                            <li><Link to="/kuwait-manpower-supply#demand-form" className="hover:text-white">Hire For Kuwait (Employer)</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-accent">Kuwait Office 🇰🇼</h4>
                        <ul className="space-y-3 text-sm text-white mb-6">
                            <li className="flex items-start">
                                <MapPin size={18} className="mr-3 text-accent flex-shrink-0 mt-0.5" />
                                <span>{COMPANY_INFO.kuwaitOffice.address}</span>
                            </li>
                            <li className="flex items-center">
                                <Phone size={18} className="mr-3 text-accent flex-shrink-0" />
                                <a href={`tel:${COMPANY_INFO.kuwaitOffice.phone.replace(/\s+/g, '')}`} className="hover:text-accent transition-colors">
                                    {COMPANY_INFO.kuwaitOffice.phone}
                                </a>
                            </li>
                            {COMPANY_INFO.kuwaitOffice.email && (
                                <li className="flex items-center">
                                    <Mail size={18} className="mr-3 text-accent flex-shrink-0" />
                                    <a href={`mailto:${COMPANY_INFO.kuwaitOffice.email}`} className="hover:text-accent transition-colors">
                                        {COMPANY_INFO.kuwaitOffice.email}
                                    </a>
                                </li>
                            )}
                        </ul>

                        <h4 className="text-lg font-semibold mb-3 text-accent">Nepal Head Office 🇳🇵</h4>
                        <ul className="space-y-3 text-sm text-white mb-6">
                            <li className="flex items-start">
                                <MapPin size={18} className="mr-3 text-accent flex-shrink-0 mt-0.5" />
                                <span>{COMPANY_INFO.address}</span>
                            </li>
                            <li className="flex items-center">
                                <Phone size={18} className="mr-3 text-accent flex-shrink-0" />
                                <a href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-accent transition-colors">
                                    {COMPANY_INFO.phone}
                                </a>
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
