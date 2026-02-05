import React from 'react';
import Section from '../ui/Section';

const PartnerLogos = () => {
    // Placeholder logos - just text boxes for now for professional look without broken images
    const partners = ['Construction Group A', 'Hospitality Corp', 'Oil & Gas Inc', 'Global Logistics', 'Retail Giants', 'Health Plus'];

    return (
        <Section className="py-12">
            <p className="text-center text-sm font-semibold text-gray-400 tracking-wider uppercase mb-8">Trusted by Industry Leaders</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
                {partners.map((partner, index) => (
                    <div key={index} className="text-xl font-bold text-primary-light flex items-center">
                        {/* Using text specific styles to mimic logos */}
                        <span className="border-2 border-primary-light p-2 rounded">{partner}</span>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default PartnerLogos;
