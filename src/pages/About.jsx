import React from 'react';
import Section from '../components/ui/Section';
import { Target, Eye, Heart } from 'lucide-react';
import Card from '../components/ui/Card';
import { COMPANY_INFO } from '../utils/constants';
import headerBg from '../assets/about-header.png';
import mdPhoto from '../assets/chairman.jpg';
import jaySahPhoto from '../assets/MD.png';
import partnerPhoto from '../assets/partner.jpg';
import registrationImg from '../assets/registration.png';
import marketingManagerPhoto from '../assets/marketing manager.jpeg';

const values = [
    { title: 'Mission', icon: Target, desc: 'To provide world-class manpower solutions that drive business growth and individual success.', color: 'bg-blue-100 text-blue-600' },
    { title: 'Vision', icon: Eye, desc: 'To be the most trusted global recruitment partner known for integrity and excellence.', color: 'bg-green-100 text-green-600' },
    { title: 'Values', icon: Heart, desc: 'Integrity, Quality, Reliability, and Respect for all individuals.', color: 'bg-red-100 text-red-600' },
];

const About = () => {
    return (
        <>
            <div className="relative bg-gray-50 py-24 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={headerBg}
                        alt="Office Background"
                        className="w-full h-full object-cover opacity-10"
                    />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-primary">About Faisal Management</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                        Your trusted partner in global workforce solutions.
                    </p>
                </div>
            </div>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-3xl font-bold text-primary mb-6">Who We Are</h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Faisal Management (formerly known as {COMPANY_INFO.formerName}) is a premier human resources consultancy and recruitment agency established to bridge the gap between global employers and talented professionals. With over 15 years of experience, we have successfully deployed thousands of workers across various industries.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            We specialize in understanding the unique needs of our clients and providing tailored solutions that ensure operational efficiency and business continuity.
                        </p>
                    </div>
                    <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2064&auto=format&fit=crop')] bg-cover bg-center"></div>
                    </div>
                </div>

                {/* Message from Chairman - Jay Sah - TOP */}
                <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16 shadow-sm border border-gray-100">
                    <div className="flex flex-col md:flex-row gap-10 items-start">
                        <div className="md:w-2/5">
                            <div className="relative mx-auto w-full h-auto rounded-xl overflow-hidden shadow-lg border border-gray-100">
                                <img
                                    src={jaySahPhoto}
                                    alt="Chairman"
                                    className="w-full h-auto"
                                    onError={(e) => {
                                        e.target.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop';
                                    }}
                                />
                            </div>
                        </div>
                        <div className="md:w-3/5 text-center md:text-left">
                            <h2 className="text-3xl font-bold text-primary mb-2">Message from the Chairman</h2>
                            <h3 className="text-xl font-semibold text-gray-700 mb-6">Jay Sah</h3>

                            <div className="space-y-4 text-gray-600 mb-6 text-lg leading-relaxed">
                                <p>First of all, we would like to extend our warm and heartfelt greetings to all members of the business community, both abroad and in Nepal.</p>
                                <p>Our business is driven by a service-oriented mission that creates employment opportunities and helps improve the economic conditions of underprivileged and backward communities in society.</p>
                                <p>Faisal Management Services is a professional HR, recruitment, selection, outsourcing, and manpower sourcing company. We provide all categories of workers—professional, skilled, semi-skilled, and unskilled—from Nepal to various companies for their projects in the U.A.E., Qatar, Saudi Arabia, Oman, Kuwait, Bahrain, and Malaysia.</p>
                                <p>We hereby assure you of our quality services and look forward to better cooperation in the future.</p>
                            </div>
                        </div>
                    </div>

                    {/* Business Partner - Prem Chhetri - MIDDLE */}
                    <div className="flex flex-col md:flex-row gap-10 items-start mt-16 pb-8">
                        <div className="md:w-2/5">
                            <div className="relative mx-auto w-full h-auto rounded-xl overflow-hidden shadow-lg">
                                <img
                                    src={mdPhoto}
                                    alt="Business Partner"
                                    className="w-full h-auto"
                                    onError={(e) => {
                                        e.target.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop';
                                    }}
                                />
                            </div>
                        </div>
                        <div className="md:w-3/5 text-center md:text-left">
                            <h2 className="text-3xl font-bold text-primary mb-2">Business Partner</h2>
                            <h3 className="text-xl font-semibold text-gray-700 mb-6">Prem Chhetri</h3>

                            <div className="space-y-4 text-gray-600 mb-6 text-lg leading-relaxed">
                                <p>We are dedicated to providing ethical, transparent, and highly efficient recruitment services that benefit both employers and employees.</p>
                                <p>Our team works tirelessly to match the right skills with the right opportunities, fostering mutually beneficial relationships across the globe.</p>
                            </div>
                        </div>
                    </div>


                {/* Business Partner - Krishna H Adhikari - BOTTOM */}
                <div className="bg-white rounded-2xl p-8 md:p-12 mb-16 shadow-sm border border-gray-100 mt-8">
                    <div className="flex flex-col md:flex-row-reverse gap-10 items-start">
                        <div className="md:w-2/5">
                            <div className="relative mx-auto w-full h-auto rounded-xl overflow-hidden shadow-lg">
                                <img
                                    src={partnerPhoto}
                                    alt="Business Partner"
                                    className="w-full h-auto"
                                    onError={(e) => {
                                        e.target.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop';
                                    }}
                                />
                            </div>
                        </div>
                        <div className="md:w-3/5 text-center md:text-left">
                            <h2 className="text-3xl font-bold text-primary mb-2">Business Partner</h2>
                            <h3 className="text-xl font-semibold text-gray-700 mb-6">Krishna H Adhikari</h3>

                            <div className="space-y-4 text-gray-600 mb-6 text-lg leading-relaxed">
                                <p>Working together to bridge the gap between global opportunities and local talent, ensuring excellence in every placement.</p>
                                <p>Our commitment remains focused on delivering quality manpower solutions that drive growth for both our clients and our candidates.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Marketing Manager - Abhishekh Singh Rajput */}
                <div className="bg-white rounded-2xl p-8 md:p-12 mb-16 shadow-sm border border-gray-100 mt-8">
                    <div className="flex flex-col md:flex-row gap-10 items-start">
                        <div className="md:w-2/5">
                            <div className="relative mx-auto w-full h-auto rounded-xl overflow-hidden shadow-lg border border-gray-100">
                                <img
                                    src={marketingManagerPhoto}
                                    alt="Marketing Manager"
                                    className="w-full h-auto"
                                    onError={(e) => {
                                        e.target.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop';
                                    }}
                                />
                            </div>
                        </div>
                        <div className="md:w-3/5 text-center md:text-left">
                            <h2 className="text-3xl font-bold text-primary mb-2">Marketing Manager</h2>
                            <h3 className="text-xl font-semibold text-gray-700 mb-6">Abhishekh Singh Rajput</h3>

                            <div className="space-y-4 text-gray-600 mb-6 text-lg leading-relaxed">
                                <p>Abhishekh Singh Rajput is a dynamic and results-driven Marketing Manager at Faisal Management Services. With a deep understanding of market trends and a passion for building strategic partnerships, he leads our marketing initiatives to expand our global reach and connect talented professionals with world-class opportunities. His commitment to excellence and innovation ensures that our brand remains a trusted leader in the recruitment industry.</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>


                {/* Vision Narrative */}
                <div className="mb-16 text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-primary mb-6">Our Vision</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        To envision a world where every individual has the opportunity to thrive through dignified employment, and every business can achieve its full potential with the right talent. We aim to set the benchmark for integrity, transparency, and excellence in the international recruitment industry, fostering long-term partnerships built on trust and mutual growth.
                    </p>
                </div>

                {/* Legal & Certifications */}
                <div className="mb-24 bg-white rounded-3xl p-10 md:p-16 shadow-lg border border-gray-100 max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-primary mb-4">Legal & Certifications</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                        <p className="mt-6 text-gray-600 max-w-2xl mx-auto italic">
                            "Committed to legal compliance, transparency, and the highest industry standards."
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="relative group cursor-pointer">
                            <div className="absolute inset-0 bg-primary/5 rounded-xl transform transition-transform group-hover:scale-105 duration-300"></div>
                            <img 
                                src={registrationImg} 
                                alt="Company Registration Certificate" 
                                className="relative z-10 w-full h-auto rounded-xl shadow-2xl border-4 border-white transition-transform group-hover:scale-[1.02] duration-300"
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                                <a 
                                    href={registrationImg} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="bg-white/90 backdrop-blur-sm text-primary px-6 py-3 rounded-full font-bold shadow-xl hover:bg-white flex items-center gap-2 transform -translate-y-2 group-hover:translate-y-0 transition-transform"
                                >
                                    <Target size={20} /> View Full Document
                                </a>
                            </div>
                        </div>
                        
                        <div className="space-y-6">
                            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
                                <h3 className="text-xl font-bold text-blue-900 mb-2">Certificate of Incorporation</h3>
                                <p className="text-blue-800/80 leading-relaxed">
                                    Faisal Management Services is a legally registered entity under the Office of the Company Registrar, Government of Nepal, pursuant to the Companies Act, 2006.
                                </p>
                            </div>
                            
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-gray-700">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                    <span><strong>Registration No:</strong> 165229/73/74</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-700">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                    <span><strong>Entity Type:</strong> Private Limited Company</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-700">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                    <span><strong>Date of Incorporation:</strong> March 10, 2017</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-700">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                    <span><strong>Status:</strong> Active & Compliant</span>
                                </div>
                            </div>
                            
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Our registration ensures that we operate with full accountability and adherence to the regulatory frameworks governing recruitment and human resources management in Nepal.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map((item, index) => (
                        <Card key={index} className="text-center p-8 hover:shadow-xl transition-shadow">
                            <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6 ${item.color}`}>
                                <item.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                            <p className="text-gray-600">{item.desc}</p>
                        </Card>
                    ))}
                </div>
            </Section>
        </>
    );
};

export default About;
