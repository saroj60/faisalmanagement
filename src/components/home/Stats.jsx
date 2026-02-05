import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { label: 'Years of Experience', value: '15+' },
    { label: 'Skilled Workers Deployed', value: '10,000+' },
    { label: 'Corporate Partners', value: '500+' },
    { label: 'Countries Served', value: '12+' },
];

const Stats = () => {
    return (
        <div className="bg-primary py-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-4"
                        >
                            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.value}</div>
                            <div className="text-sm md:text-base text-gray-300 uppercase tracking-wider">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Stats;
