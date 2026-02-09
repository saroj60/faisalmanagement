import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import heroImage from '../../assets/hero-relationship.png';

const Hero = () => {
    return (
        <div className="relative bg-primary-light h-auto lg:h-[85vh] flex items-center overflow-hidden py-12 lg:py-0">
            {/* Background Image - Removed as requested */}
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-white via-white/90 to-transparent lg:to-transparent">
                {/* Gradient adjusted to ensure text readability on the left */}
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full h-full flex items-center">
                <div className="flex flex-col lg:flex-row items-center justify-between w-full h-full">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-2xl lg:w-1/2 mb-10 lg:mb-0 z-20"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 leading-tight">
                            Build Your <span className="text-accent">Dream Career</span> Abroad With Us
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
                            Legitimate Foreign Employment Opportunities
                        </h2>
                        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl">
                            Secure your future with trusted jobs in the Gulf, Malaysia, Europe, and beyond. We connect skilled and unskilled workers with top international employers.
                        </p>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <Link to="/demands">
                                <Button size="lg" className="w-full sm:w-auto">View Demand</Button>
                            </Link>
                            <Link to="/contact">
                                <Button size="lg" variant="outline" className="w-full sm:w-auto text-primary border-primary hover:bg-primary hover:text-white">
                                    Apply Now
                                </Button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Mobile/Tablet Image - Hidden on Large Screens */}
                    <div className="lg:hidden w-full flex justify-center mt-8">
                        <img
                            src={heroImage}
                            alt="Professional Workforce"
                            className="w-full max-w-md object-contain drop-shadow-xl"
                        />
                    </div>
                </div>
            </div>

            {/* Desktop Full-Width Right Image */}
            <div className="hidden lg:block absolute right-0 bottom-0 top-0 w-[50%] h-full z-0">
                <img
                    src={heroImage}
                    alt="Professional Workforce"
                    className="w-full h-full object-cover object-left-bottom" // Changed to object-left-bottom to keep the handshake focused
                />
            </div>
        </div>

    );
};

export default Hero;
