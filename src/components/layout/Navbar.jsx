import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, COMPANY_INFO } from '../../utils/constants';
import Button from '../ui/Button';

import logo from '../../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 sm:h-20 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/">
                            <img src={logo} alt={COMPANY_INFO.name} className="h-9 sm:h-12 w-auto object-contain" />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex md:space-x-3 lg:space-x-6 items-center">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-xs lg:text-sm font-semibold transition-colors hover:text-accent whitespace-nowrap ${(link.path === '/' && location.pathname === '/') ||
                                        (link.path !== '/' && location.pathname.startsWith(link.path))
                                        ? 'text-primary font-bold'
                                        : 'text-black'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/contact">
                            <Button size="sm" className="bg-black text-white hover:bg-gray-900 border-none whitespace-nowrap text-xs lg:text-sm px-3.5 py-1.5">Contact Us</Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="p-1.5 rounded-lg text-primary hover:text-accent hover:bg-gray-100 focus:outline-none transition-colors"
                            aria-label="Toggle navigation menu"
                        >
                            {isOpen ? <X size={26} /> : <Menu size={26} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden max-h-[calc(100vh-4rem)] overflow-y-auto"
                    >
                        <div className="px-4 pt-3 pb-6 space-y-1.5">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-3 py-2.5 rounded-lg text-base font-semibold transition-colors ${(link.path === '/' && location.pathname === '/') ||
                                        (link.path !== '/' && location.pathname.startsWith(link.path))
                                        ? 'bg-primary/10 text-primary'
                                        : 'text-black hover:text-accent hover:bg-gray-50'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-2">
                                <Link to="/contact" onClick={() => setIsOpen(false)}>
                                    <Button className="w-full bg-black text-white hover:bg-gray-900 border-none py-3">Contact Us</Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
