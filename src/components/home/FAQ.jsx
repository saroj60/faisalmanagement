import React, { useState } from 'react';
import Section from '../ui/Section';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../../utils/constants';

export const FAQ_DATA = [
    {
        question: "Is Faisal Management a legally licensed manpower agency in Nepal?",
        answer: `Yes, absolutely. Faisal Management Services (formerly known as ${COMPANY_INFO.formerName}) is an officially authorized foreign employment agency recognized by the Government of Nepal, operating under Department of Foreign Employment License No. 1289/074/75 and Company Registration No. 165229/73/74.`
    },
    {
        question: "Where is Faisal Management's Kuwait office located?",
        answer: `Our Kuwait International Office is located at Jleeb Al Shyoukh - Al Sour - Complex Road - 50, Floor - 2, Kuwait. We operate under Commercial Registration (C.R.) No. 2020/19741 (Phone: ${COMPANY_INFO.kuwaitOffice.phone}).`
    },
    {
        question: "Which countries does Faisal Management supply workers to?",
        answer: "We supply qualified workers across the Middle East and Southeast Asia, primarily to Kuwait, the United Arab Emirates (UAE/Dubai), Qatar, the Kingdom of Saudi Arabia (KSA), Oman, Bahrain, and Malaysia."
    },
    {
        question: "What types of workforce categories do you provide?",
        answer: "We provide all categories of human resources: Highly Skilled Professionals (Engineers, Managers, Accountants), Skilled Workers (Electricians, Welders, Carpenters, Heavy Drivers, Chefs), Semi-Skilled Personnel (Scaffolders, Baristas, Hospitality Staff), and General Workforce (Cleaners, Helpers, Construction Labour)."
    },
    {
        question: "How are candidates vetted and trade tested before deployment?",
        answer: "Every candidate undergoes rigorous verification, including background verification, technical trade testing in government-certified vocational centers, thorough medical checkups at GCC-authorized clinics, and comprehensive pre-departure cultural and safety orientation."
    },
    {
        question: "How can international employers submit job demands or request manpower?",
        answer: `Overseas employers can directly submit demand letters through our online portal, email us at ${COMPANY_INFO.email}, or contact our Kathmandu Head Office (+977-14592271) or Kuwait Office (${COMPANY_INFO.kuwaitOffice.phone}). We provide full legal liaison and swift mobilization.`
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <Section className="py-10 sm:py-16 md:py-20 bg-gray-50/70">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8 sm:mb-14">
                    <div className="inline-flex items-center gap-2 bg-blue-100 text-primary px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                        <HelpCircle size={15} />
                        <span>Frequently Asked Questions</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary tracking-tight mb-3 sm:mb-4">
                        Got Questions? We Have Answers.
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-medium">
                        Everything you need to know about our legal licensing, Kuwait operations, recruitment process, and workforce deployment.
                    </p>
                </div>

                <div className="space-y-4">
                    {FAQ_DATA.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className={`rounded-2xl transition-all duration-300 border ${
                                    isOpen
                                        ? 'bg-white shadow-md border-primary/20 ring-1 ring-primary/10'
                                        : 'bg-white hover:bg-gray-50/80 border-gray-200/80'
                                }`}
                            >
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full py-4 px-4 sm:py-5 sm:px-6 text-left flex justify-between items-center gap-3 sm:gap-4 focus:outline-none"
                                    aria-expanded={isOpen}
                                >
                                    <span className={`font-bold text-sm sm:text-base md:text-lg transition-colors leading-snug ${
                                        isOpen ? 'text-primary' : 'text-gray-900'
                                    }`}>
                                        {item.question}
                                    </span>
                                    <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                                        isOpen ? 'bg-primary text-white rotate-180' : 'bg-gray-100 text-gray-500'
                                    }`}>
                                        <ChevronDown size={16} className="sm:w-[18px] sm:h-[18px]" />
                                    </span>
                                </button>

                                {isOpen && (
                                    <div className="px-4 pb-4 sm:px-6 sm:pb-6 pt-1 text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base border-t border-gray-100 mt-1">
                                        <p>{item.answer}</p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
};

export default FAQ;
