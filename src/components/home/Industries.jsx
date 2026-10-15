import React from 'react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import { HardHat, Briefcase, Truck, Utensils, HeartPulse, Factory } from 'lucide-react';
import { motion } from 'framer-motion';

import constructionImg from '../../assets/industries/construction.png';
import corporateImg from '../../assets/industries/corporate.png';
import logisticsImg from '../../assets/industries/logistics.png';
import hospitalityImg from '../../assets/industries/hospitality.png';
import healthcareImg from '../../assets/industries/healthcare.png';
import manufacturingImg from '../../assets/industries/manufacturing.png';

const industries = [
    {
        name: 'Construction',
        icon: HardHat,
        desc: 'Masons, Carpenters, Electricians',
        image: constructionImg
    },
    {
        name: 'Corporate Services',
        icon: Briefcase,
        desc: 'Admin, HR, Receptionists',
        image: corporateImg
    },
    {
        name: 'Logistics',
        icon: Truck,
        desc: 'Drivers, Warehouse Staff, Delivery',
        image: logisticsImg
    },
    {
        name: 'Hospitality',
        icon: Utensils,
        desc: 'Chefs, Waiters, Housekeeping',
        image: hospitalityImg
    },
    {
        name: 'Healthcare',
        icon: HeartPulse,
        desc: 'Nurses, Caregivers, Technicians',
        image: healthcareImg
    },
    {
        name: 'Manufacturing',
        icon: Factory,
        desc: 'Machine Operators, Assembly Line',
        image: manufacturingImg
    },
];

const Industries = () => {
    return (
        <Section bg="gray" id="industries">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 sm:mb-4">Industries We Serve</h2>
                <p className="text-gray-600 text-sm sm:text-base">
                    We specialize in providing top-tier talent across various sectors, ensuring operational excellence for your business.
                </p>
            </div>

            <div className="space-y-12 sm:space-y-16 lg:space-y-20">
                {industries.map((item, index) => (
                    <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-6 sm:gap-10 lg:gap-16`}
                    >
                        {/* Image Side */}
                        <div className="w-full lg:w-1/2">
                            <div className="relative rounded-xl overflow-hidden shadow-xl aspect-[16/10] sm:aspect-video group">
                                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="w-full lg:w-1/2">
                            <div className="flex items-center mb-3 sm:mb-4">
                                <div className="p-2.5 sm:p-3 bg-accent/20 rounded-full text-primary mr-3 sm:mr-4 shrink-0">
                                    <item.icon size={24} className="sm:w-7 sm:h-7" />
                                </div>
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">{item.name}</h3>
                            </div>
                            <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-4 sm:mb-6 leading-relaxed">
                                We provide specialized recruitment for the {item.name.toLowerCase()} sector, ensuring you get professionals who understand the nuances of the industry.
                            </p>

                            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100">
                                <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 border-b border-gray-100 pb-2 text-sm sm:text-base">Key Roles We Recruit:</h4>
                                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                    {item.desc.split(', ').map((role, i) => (
                                        <span key={i} className="bg-gray-100 text-primary text-xs sm:text-sm font-medium px-2.5 sm:px-3 py-1 rounded-full">
                                            {role}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Industries;
