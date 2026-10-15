import React from 'react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import { Star } from 'lucide-react';

import testimonial1 from '../../assets/testimonials/nepalese_male_1.png';
import testimonial2 from '../../assets/testimonials/nepalese_female_1.png';
import testimonial3 from '../../assets/testimonials/nepalese_male_2.png';

const testimonials = [
    {
        name: 'Ram Bahadur Thapa',
        role: 'Project Manager, Dubai Construction Co.',
        quote: 'Faisal Management provided us with excellent masons and electricians within a tight deadline. Highly recommended.',
        rating: 5,
        image: testimonial1
    },
    {
        name: 'Sita Sharma',
        role: 'HR Director, Global Hospitality',
        quote: 'The quality of candidates for our hotel chain was outstanding. Their screening process is top-notch.',
        rating: 5,
        image: testimonial2
    },
    {
        name: 'Bikas Gurung',
        role: 'Operations Head, Logistics Ltd.',
        quote: 'Efficient, professional, and reliable. They handled all the visa documentation seamlessly.',
        rating: 4,
        image: testimonial3
    },
];

const Testimonials = () => {
    return (
        <Section bg="gray" id="testimonials">
            <div className="text-center mb-10 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 sm:mb-4">What Our Clients Say</h2>
                <p className="text-gray-600 text-sm sm:text-base">Trusted by leading companies across industries.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {testimonials.map((t, index) => (
                    <Card key={index} className="p-5 sm:p-8 flex flex-col justify-between">
                        <div>
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} className={`${i < t.rating ? 'text-accent fill-accent' : 'text-gray-300'}`} />
                                ))}
                            </div>
                            <p className="text-gray-600 italic mb-6 text-sm sm:text-base">"{t.quote}"</p>
                        </div>
                        <div className="mt-auto flex items-center pt-4 border-t border-gray-100">
                            <img src={t.image} alt={t.name} className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover mr-3 sm:mr-4 shrink-0" />
                            <div>
                                <p className="font-bold text-primary text-sm sm:text-base">{t.name}</p>
                                <p className="text-xs text-gray-500">{t.role}</p>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    );
};

export default Testimonials;
