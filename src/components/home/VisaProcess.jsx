import React from 'react';
import Section from '../ui/Section';
import { ClipboardList, UserCheck, ShieldCheck, Globe, Plane, Briefcase, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
    {
        title: 'Demand Allocation',
        description: 'We receive and analyze your manpower requirements.',
        icon: ClipboardList
    },
    {
        title: 'Interview Process',
        description: 'Screening and interviewing candidates to find the best fit.',
        icon: UserCheck
    },
    {
        title: 'Medical & Police Report',
        description: 'Selected candidates undergo health and security checks.',
        icon: ShieldCheck
    },
    {
        title: 'MOFA Attestation',
        description: 'Documents are processed through the Ministry of Foreign Affairs.',
        icon: Globe
    },
    {
        title: 'Visa & Flight',
        description: 'Visa stamping and flight ticket booking for deployment.',
        icon: Plane
    },
    {
        title: 'Deployment',
        description: 'Workers arrive at your site, ready to work.',
        icon: Briefcase
    }
];

const VisaProcess = () => {
    return (
        <Section bg="white" id="visa-process">
            <div className="text-center mb-10 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 sm:mb-4">Recruitment & Visa Process</h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
                    A streamlined, transparent process ensuring timely deployment of quality manpower.
                </p>
            </div>

            <div className="relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 -z-10"></div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-center text-center bg-white p-5 sm:p-4 rounded-xl border border-gray-100 sm:border-transparent hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full flex items-center justify-center border-4 border-gray-100 mb-4 sm:mb-6 shadow-sm z-10">
                                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                    <step.icon size={28} className="sm:w-8 sm:h-8" />
                                </div>
                            </div>

                            <h3 className="text-base sm:text-lg font-bold text-primary mb-2 sm:mb-3 min-h-[auto] sm:min-h-[56px] flex items-center justify-center">
                                {step.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default VisaProcess;
