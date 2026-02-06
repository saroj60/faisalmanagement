import React from 'react';
import Section from '../components/ui/Section';
import { Target, Eye, Heart } from 'lucide-react';
import Card from '../components/ui/Card';
import headerBg from '../assets/about-header.png';
import mdPhoto from '../assets/jaynath-shah.png';

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
                            Faisal Management is a premier human resources consultancy and recruitment agency established to bridge the gap between global employers and talented professionals. With over 15 years of experience, we have successfully deployed thousands of workers across various industries.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            We specialize in understanding the unique needs of our clients and providing tailored solutions that ensure operational efficiency and business continuity.
                        </p>
                    </div>
                    <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2064&auto=format&fit=crop')] bg-cover bg-center"></div>
                    </div>
                </div>

                {/* Message from MD Section */}
                <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16 shadow-sm border border-gray-100">
                    <div className="flex flex-col md:flex-row gap-10 items-center">
                        <div className="md:w-1/3">
                            <div className="relative mx-auto w-64 h-64 md:w-full md:h-auto md:aspect-[3/4] rounded-xl overflow-hidden shadow-lg">
                                {/* Using the imported image would be better, but for now assuming direct path or import */}
                                <img
                                    src={mdPhoto}
                                    alt="Managing Director"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="md:w-2/3 text-center md:text-left">
                            <h2 className="text-3xl font-bold text-primary mb-2">Message from the Managing Director</h2>
                            <h3 className="text-xl font-semibold text-gray-700 mb-6">Jaynath Shah</h3>

                            <div className="space-y-4 text-gray-600 mb-6 text-lg leading-relaxed">
                                <p>First of all, we would like to extend our warm and heartfelt greetings to all members of the business community, both abroad and in Nepal.</p>
                                <p>Our business is driven by a service-oriented mission that creates employment opportunities and helps improve the economic conditions of underprivileged and backward communities in society.</p>
                                <p>Faisal Management Services is a professional HR, recruitment, selection, outsourcing, and manpower sourcing company. We provide all categories of workers—professional, skilled, semi-skilled, and unskilled—from Nepal to various companies for their projects in the U.A.E., Qatar, Saudi Arabia, Oman, Kuwait, Bahrain, and Malaysia.</p>
                                <p>We hereby assure you of our quality services and look forward to better cooperation in the future.</p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 border-t border-gray-200 pt-6">
                                <div>
                                    <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold">Contact</p>
                                    <p className="text-gray-800 font-medium mt-1">9851026983, 9801026983</p>
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
