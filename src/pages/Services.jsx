import React from 'react';
import Section from '../components/ui/Section';
import { motion } from 'framer-motion';

import constructionImg from '../assets/industries/construction.png';
import corporateImg from '../assets/industries/corporate.png';
import logisticsImg from '../assets/industries/logistics.png';
import hospitalityImg from '../assets/industries/hospitality.png';
import manufacturingImg from '../assets/industries/manufacturing.png';

const servicesList = [
    {
        title: 'Local Recruitment',
        image: corporateImg,
        desc: 'Faisal Management offers comprehensive local recruitment services tailored to meet the specific needs of businesses.',
    },
    {
        title: 'Logistics',
        image: logisticsImg,
        desc: 'Specializes in recruitment services for the logistics industry, offering tailored solutions to match businesses with top talent.',
    },
    {
        title: 'Maintenance',
        image: manufacturingImg, // Using manufacturing as placeholder for maintenance if needed, or specific if available
        desc: 'It is a leading provider of recruitment solutions for the maintenance industry, with a dedicated team of experienced recruiters.',
    },
    {
        title: 'Hospitality',
        image: hospitalityImg,
        desc: 'Specializes in recruitment solutions for the hospitality industry, offering tailored services to meet diverse staffing needs.',
    },
    {
        title: 'Construction',
        image: constructionImg,
        desc: 'Faisal Management offers specialized recruitment services tailored to the construction industry.',
    }
];

const Services = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="relative bg-gray-50 py-24 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={corporateImg}
                        alt="Services Background"
                        className="w-full h-full object-cover opacity-5"
                    />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Our Services</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Delivering excellence in recruitment and manpower solutions across diverse sectors.
                    </p>
                </div>
            </div>

            <Section>
                <div className="flex flex-wrap justify-center gap-8">
                    {servicesList.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative group overflow-hidden rounded-[2rem] h-[400px] w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-2rem)] flex-shrink-0 shadow-lg cursor-pointer"
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${service.image})` }}
                            />

                            {/* Global Dimming Layer - Improves general contrast */}
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />

                            {/* Gradient Overlay - Stronger at bottom for text readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90 transition-opacity duration-300" />

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-8 text-center">
                                <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-md">{service.title}</h3>
                                <p className="text-gray-200 text-sm leading-relaxed max-w-sm mx-auto font-medium drop-shadow-sm">
                                    {service.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default Services;
