import React from 'react';
import Section from '../ui/Section';
import { CheckCircle, Globe, Users, Clock } from 'lucide-react';
import whyChooseUsImg from '../../assets/why_choose_us.png';

const reasons = [
    {
        title: 'Global Reach',
        description: 'Extensive network across Asia, Africa, and the Middle East.',
        icon: Globe
    },
    {
        title: 'Qualified Candidates',
        description: 'Rigorous screening process to ensure top-quality talent.',
        icon: Users
    },
    {
        title: 'Fast Deployment',
        description: 'Efficient processing to get workers on site when needed.',
        icon: Clock
    },
];

const WhyChooseUs = () => {
    return (
        <Section id="why-choose-us">
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                    <div className="bg-gray-200 rounded-lg overflow-hidden h-[400px] relative">
                        <div className="absolute inset-0 bg-primary/20"></div>
                        <img
                            src={whyChooseUsImg}
                            alt="Professional Team"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div className="md:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Why Choose Faisal Management?</h2>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        We understand that workforce quality determines business success. Our comprehensive recruitment process ensures you get dedicated, skilled, and reliable professionals tailored to your specific project needs.
                    </p>

                    <div className="space-y-6">
                        {reasons.map((reason, index) => (
                            <div key={index} className="flex">
                                <div className="flex-shrink-0 mr-4">
                                    <div className="p-2 bg-accent/20 rounded-full text-accent-hover">
                                        <reason.icon size={24} />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-primary mb-1">{reason.title}</h4>
                                    <p className="text-gray-600 text-sm">{reason.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default WhyChooseUs;
