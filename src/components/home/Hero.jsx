import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../../utils/constants';
import Button from '../ui/Button';
import heroImage from '../../assets/hero-workforce.jpg';

const Hero = () => {
    return (
        <div className="relative bg-gradient-to-b from-slate-50 via-white to-white h-auto lg:min-h-[85vh] flex items-center overflow-hidden py-10 lg:py-16 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-2xl lg:w-1/2 z-20"
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="inline-block bg-primary/10 text-primary px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4"
                        >
                            Formerly {COMPANY_INFO.formerName}
                        </motion.span>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-3 sm:mb-4 leading-tight break-words">
                            Build Your <span className="text-accent">Dream Career</span> Abroad With Us
                        </h1>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-4 sm:mb-6">
                            Legitimate Foreign Employment Opportunities
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 max-w-xl leading-relaxed">
                            Secure your future with trusted jobs in the Gulf, Malaysia, Europe, and beyond. We connect skilled and unskilled workers with top international employers.
                        </p>
                        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
                            <Link to="/demands" className="w-full sm:w-auto">
                                <Button size="lg" className="w-full sm:w-auto shadow-md hover:shadow-lg">View Demand</Button>
                            </Link>
                            <Link to="/portfolio" className="w-full sm:w-auto">
                                <Button size="lg" variant="outline" className="w-full sm:w-auto text-primary border-primary hover:bg-primary hover:text-white shadow-xs">
                                    View Portfolio
                                </Button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Workforce Team Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center"
                    >
                        <img
                            src={heroImage}
                            alt="Professional Overseas Workforce"
                            className="w-full max-w-lg lg:max-w-2xl h-auto object-contain drop-shadow-xl"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
