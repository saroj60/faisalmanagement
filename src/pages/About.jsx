import React from 'react';
import Section from '../components/ui/Section';
import { Target, Eye, Heart, Phone, Mail } from 'lucide-react';
import Card from '../components/ui/Card';
import { COMPANY_INFO } from '../utils/constants';
import headerBg from '../assets/about-header.png';
import mdPhoto from '../assets/chairman.jpg';
import jaySahPhoto from '../assets/MD.png';
import mrSherpaPhoto from '../assets/mr_sherpa.jpg';
import partnerPhoto from '../assets/partner NB.png';
import registrationImg from '../assets/registration.png';
import marketingManagerPhoto from '../assets/marketing manager.jpeg';
import chhabilalPhoto from '../assets/chhabilal.jpg';
import poonamPhoto from '../assets/poonam_thakur.png';
import lisencePhoto from '../assets/lisence.jpeg';
import EmbassyClients from '../components/common/EmbassyClients';
import SEO from '../components/common/SEO';

const values = [
    { title: 'Mission', icon: Target, desc: 'To provide world-class manpower solutions that drive business growth and individual success.', color: 'bg-blue-100 text-blue-600' },
    { title: 'Vision', icon: Eye, desc: 'To be the most trusted global recruitment partner known for integrity and excellence.', color: 'bg-green-100 text-green-600' },
    { title: 'Values', icon: Heart, desc: 'Integrity, Quality, Reliability, and Respect for all individuals.', color: 'bg-red-100 text-red-600' },
];

const About = () => {
    const aboutSchema = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About Faisal Management Services LLC",
        "description": "Company profile, government registration 165229/73/74, license 1289/074/75, Kuwait C.R. 2020/19741, Chairman Jay Sah and Managing Director Mr. Sherpa.",
        "url": "https://faisalnepal.com.np/about",
        "mainEntity": {
            "@type": "EmploymentAgency",
            "name": "Faisal Management Services LLC",
            "founder": {
                "@type": "Person",
                "name": "Jay Sah",
                "jobTitle": "Chairman"
            },
            "employee": {
                "@type": "Person",
                "name": "Mr. Sherpa",
                "jobTitle": "Managing Director"
            }
        }
    };

    return (
        <>
            <SEO 
                title="About Us - Leadership, Licenses & Embassy Registered Clients"
                description="Learn about Faisal Management Services (formerly Sony International), led by Chairman Jay Sah and Managing Director Mr. Sherpa. Verified government licenses and 49+ Kuwait Embassy registered employers."
                keywords="About Faisal Management, Jay Sah Chairman, Mr. Sherpa Managing Director, Kuwait Embassy Registration, Nepal Manpower License 1289/074/75, Sony International Nepal"
                canonicalPath="/about"
                schema={aboutSchema}
            />
            <div className="relative bg-gray-50 py-12 sm:py-20 md:py-24 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={headerBg}
                        alt="Office Background"
                        className="w-full h-full object-cover opacity-10"
                    />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-6 tracking-tight text-primary">About Faisal Management</h1>
                    <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                        Your trusted partner in global workforce solutions.
                    </p>
                </div>
            </div>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-10 sm:mb-16">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3 sm:mb-6">Who We Are</h2>
                        <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                            Faisal Management (formerly known as {COMPANY_INFO.formerName}) is a premier human resources consultancy and recruitment agency established to bridge the gap between global employers and talented professionals. With over 15 years of experience, we have successfully deployed thousands of workers across various industries.
                        </p>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                            We specialize in understanding the unique needs of our clients and providing tailored solutions that ensure operational efficiency and business continuity.
                        </p>
                    </div>
                    <div className="relative h-60 sm:h-80 rounded-xl overflow-hidden shadow-lg">
                        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2064&auto=format&fit=crop')] bg-cover bg-center"></div>
                    </div>
                </div>

                {/* Message from Chairman - Jay Sah - TOP */}
                <div className="bg-gray-50 rounded-2xl p-5 sm:p-8 md:p-12 mb-10 sm:mb-16 shadow-sm border border-gray-100">
                    <div className="flex flex-col md:flex-row gap-6 sm:gap-10 items-start">
                        <div className="w-full md:w-2/5 flex justify-center">
                            <div className="relative mx-auto w-full max-w-[280px] sm:max-w-xs md:max-w-none h-auto rounded-xl overflow-hidden shadow-lg border border-gray-100">
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
                        <div className="w-full md:w-3/5 text-center md:text-left">
                            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-2">Message from the Chairman</h2>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-4 sm:mb-6">Jay Sah</h3>

                            <div className="space-y-4 text-gray-600 mb-6 text-base sm:text-lg leading-relaxed">
                                <p>First of all, we would like to extend our warm and heartfelt greetings to all members of the business community, both abroad and in Nepal.</p>
                                <p>Our business is driven by a service-oriented mission that creates employment opportunities and helps improve the economic conditions of underprivileged and backward communities in society.</p>
                                <p>Faisal Management Services is a professional HR, recruitment, selection, outsourcing, and manpower sourcing company. We provide all categories of workers—professional, skilled, semi-skilled, and unskilled—from Nepal to various companies for their projects in the U.A.E., Qatar, Saudi Arabia, Oman, Kuwait, Bahrain, and Malaysia.</p>
                                <p>We hereby assure you of our quality services and look forward to better cooperation in the future.</p>
                            </div>
                        </div>
                    </div>

                    {/* Managing Director - Mr. Sherpa */}
                    <div className="bg-white rounded-2xl p-5 sm:p-8 md:p-12 mb-8 shadow-sm border border-gray-100 mt-8 sm:mt-12">
                        <div className="flex flex-col md:flex-row-reverse gap-6 sm:gap-10 items-start">
                            <div className="w-full md:w-2/5 flex justify-center">
                                <div className="relative mx-auto w-full max-w-[280px] sm:max-w-xs md:max-w-none h-auto rounded-xl overflow-hidden shadow-lg border border-gray-100">
                                    <img
                                        src={mrSherpaPhoto}
                                        alt="Managing Director"
                                        className="w-full h-auto object-cover"
                                        onError={(e) => {
                                            e.target.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop';
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-3/5 text-center md:text-left">
                                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-2">Managing Director</h2>
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-4 sm:mb-6">Mr. Sherpa</h3>

                                <div className="space-y-4 text-gray-600 mb-6 text-base sm:text-lg leading-relaxed">
                                    <p>Mr. Sherpa serves as the Managing Director of Faisal Management Services, leading executive strategy, organizational excellence, and international operations.</p>
                                    <p>With an unwavering commitment to transparent and ethical manpower solutions, he spearheads relationships with global employers across the Middle East and East Asia. His visionary leadership ensures that every placement meets the highest standards of safety, professionalism, and mutual growth—bridging opportunities for skilled Nepali talent with trusted international corporations.</p>
                                </div>

                                {/* Direct Contact Info */}
                                <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-2.5 sm:gap-3 text-xs md:text-sm">
                                    <a
                                        href="tel:+96598034552"
                                        className="inline-flex items-center gap-2 bg-blue-50 text-primary hover:bg-primary hover:text-white px-3.5 py-1.5 rounded-full font-bold transition-colors"
                                    >
                                        <Phone size={14} />
                                        <span>+965 98034552</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* International Marketing Director - Mr. Chhabilal */}
                    <div className="bg-white rounded-2xl p-5 sm:p-8 md:p-12 mb-8 sm:mb-12 shadow-sm border border-gray-100 mt-8 sm:mt-12">
                        <div className="flex flex-col md:flex-row gap-6 sm:gap-10 items-start">
                            <div className="w-full md:w-2/5 flex justify-center">
                                <div className="relative mx-auto w-full max-w-[280px] sm:max-w-xs md:max-w-none h-auto rounded-xl overflow-hidden shadow-lg border border-gray-100">
                                    <img
                                        src={chhabilalPhoto}
                                        alt="International Marketing Director"
                                        className="w-full h-auto object-cover"
                                        onError={(e) => {
                                            e.target.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop';
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-3/5 text-center md:text-left">
                                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-2">International Marketing Director</h2>
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-4 sm:mb-6">Mr. Chhabilal</h3>

                                <div className="space-y-4 text-gray-600 mb-6 text-base sm:text-lg leading-relaxed">
                                    <p>Mr. Chhabilal serves as the International Marketing Director at Faisal Management Services. With extensive expertise in cross-border recruitment and international market dynamics, he spearheads our global outreach, institutional partnerships, and employer relations across key international markets.</p>
                                    <p>Dedicated to delivering excellence and expanding overseas employment opportunities, he works closely with global corporate clients to align top-tier Nepali talent with international business requirements while ensuring integrity, ethics, and mutual growth.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Marketing Officer - Poonam Thakur */}
                    <div className="bg-white rounded-2xl p-5 sm:p-8 md:p-12 mb-8 sm:mb-12 shadow-sm border border-gray-100 mt-8">
                        <div className="flex flex-col md:flex-row-reverse gap-6 sm:gap-10 items-start">
                            <div className="w-full md:w-2/5 flex justify-center">
                                <div className="relative mx-auto w-full max-w-[280px] sm:max-w-xs md:max-w-none h-auto rounded-xl overflow-hidden shadow-lg border border-gray-100">
                                    <img
                                        src={poonamPhoto}
                                        alt="Marketing Officer"
                                        className="w-full h-auto object-cover"
                                        onError={(e) => {
                                            e.target.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop';
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-3/5 text-center md:text-left">
                                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-2">Marketing Officer</h2>
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-4 sm:mb-6">Poonam Thakur</h3>

                                <div className="space-y-4 text-gray-600 mb-6 text-base sm:text-lg leading-relaxed">
                                    <p>Poonam Thakur serves as Marketing Officer at Faisal Management Services, driving strategic outreach, client relations, and market development initiatives.</p>
                                    <p>With a strong focus on building trusted international partnerships and connecting skilled Nepali professionals with leading global employers, she coordinates recruitment campaigns and client communication to ensure excellence, efficiency, and sustained organizational growth.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Business Partner - Prem Chhetri */}
                    <div className="bg-white rounded-2xl p-5 sm:p-8 md:p-12 mb-8 sm:mb-12 shadow-sm border border-gray-100 mt-8">
                        <div className="flex flex-col md:flex-row gap-6 sm:gap-10 items-start">
                            <div className="w-full md:w-2/5 flex justify-center">
                                <div className="relative mx-auto w-full max-w-[280px] sm:max-w-xs md:max-w-none h-auto rounded-xl overflow-hidden shadow-lg border border-gray-100">
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
                            <div className="w-full md:w-3/5 text-center md:text-left">
                                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-2">Business Partner</h2>
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-4 sm:mb-6">Prem Chhetri</h3>

                                <div className="space-y-4 text-gray-600 mb-6 text-base sm:text-lg leading-relaxed">
                                    <p>We are dedicated to providing ethical, transparent, and highly efficient recruitment services that benefit both employers and employees.</p>
                                    <p>Our team works tirelessly to match the right skills with the right opportunities, fostering mutually beneficial relationships across the globe.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* HR & Business Partner - NB Karki */}
                    <div className="bg-white rounded-2xl p-5 sm:p-8 md:p-12 mb-8 sm:mb-12 shadow-sm border border-gray-100 mt-8">
                        <div className="flex flex-col md:flex-row-reverse gap-6 sm:gap-10 items-start">
                            <div className="w-full md:w-2/5 flex justify-center">
                                <div className="relative mx-auto w-full max-w-[280px] sm:max-w-xs md:max-w-none h-auto rounded-xl overflow-hidden shadow-lg border border-gray-100">
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
                            <div className="w-full md:w-3/5 text-center md:text-left">
                                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-2">HR & Business Partner</h2>
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-4 sm:mb-6">NB karki</h3>

                                <div className="space-y-4 text-gray-600 mb-6 text-base sm:text-lg leading-relaxed">
                                    <p>Working together to bridge the gap between global opportunities and local talent, ensuring excellence in every placement.</p>
                                    <p>Our commitment remains focused on delivering quality manpower solutions that drive growth for both our clients and our candidates.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Marketing Manager - Abhishekh Singh Rajput */}
                    <div className="bg-white rounded-2xl p-5 sm:p-8 md:p-12 mb-10 sm:mb-16 shadow-sm border border-gray-100 mt-8">
                        <div className="flex flex-col md:flex-row gap-6 sm:gap-10 items-start">
                            <div className="w-full md:w-2/5 flex justify-center">
                                <div className="relative mx-auto w-full max-w-[280px] sm:max-w-xs md:max-w-none h-auto rounded-xl overflow-hidden shadow-lg border border-gray-100">
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
                            <div className="w-full md:w-3/5 text-center md:text-left">
                                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-2">Marketing Manager</h2>
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-4 sm:mb-6">Abhishekh Singh Rajput</h3>

                                <div className="space-y-4 text-gray-600 mb-6 text-base sm:text-lg leading-relaxed">
                                    <p>Abhishekh Singh Rajput is a dynamic and results-driven Marketing Manager at Faisal Management Services. With a deep understanding of market trends and a passion for building strategic partnerships, he leads our marketing initiatives to expand our global reach and connect talented professionals with world-class opportunities. His commitment to excellence and innovation ensures that our brand remains a trusted leader in the recruitment industry.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Vision Narrative */}
                <div className="mb-12 sm:mb-16 text-center max-w-4xl mx-auto px-2">
                    <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 sm:mb-6">Our Vision</h2>
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                        To envision a world where every individual has the opportunity to thrive through dignified employment, and every business can achieve its full potential with the right talent. We aim to set the benchmark for integrity, transparency, and excellence in the international recruitment industry, fostering long-term partnerships built on trust and mutual growth.
                    </p>
                </div>

                {/* Legal & Certifications */}
                <div className="mb-16 sm:mb-24 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-16 shadow-lg border border-gray-100 max-w-6xl mx-auto">
                    <div className="text-center mb-8 sm:mb-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3 sm:mb-4">Legal & Certifications</h2>
                        <div className="w-16 sm:w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                        <p className="mt-4 sm:mt-6 text-gray-600 max-w-3xl mx-auto italic text-sm sm:text-base">
                            "Committed to legal compliance, transparency, and the highest industry standards. Our registrations ensure that we operate with full accountability and adherence to regulatory frameworks."
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
                        {/* Company Registration */}
                        <div className="space-y-4 sm:space-y-6">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800 border-b border-gray-100 pb-2">Company Registration</h3>
                            <div className="relative group cursor-pointer h-64 sm:h-80 rounded-xl overflow-hidden shadow-lg border-2 sm:border-4 border-white bg-slate-50">
                                <img 
                                    src={registrationImg} 
                                    alt="Company Registration Certificate" 
                                    className="w-full h-full object-contain sm:object-cover transition-transform group-hover:scale-[1.02] duration-300"
                                />
                                <div className="absolute inset-0 bg-primary/20 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                                    <a 
                                        href={registrationImg} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="bg-white/95 text-primary px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm shadow-xl hover:bg-white flex items-center gap-2 transition-transform"
                                    >
                                        <Target size={18} /> View Full Certificate
                                    </a>
                                </div>
                            </div>
                            <div className="bg-blue-50/50 p-4 sm:p-6 rounded-xl space-y-2.5 sm:space-y-3">
                                <div className="flex items-center gap-2.5 text-gray-700 text-xs sm:text-sm">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full shrink-0"></div>
                                    <span><strong>Registration No:</strong> 165229/73/74</span>
                                </div>
                                <div className="flex items-center gap-2.5 text-gray-700 text-xs sm:text-sm">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full shrink-0"></div>
                                    <span><strong>Date of Incorporation:</strong> March 10, 2017</span>
                                </div>
                                <div className="flex items-center gap-2.5 text-gray-700 text-xs sm:text-sm">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full shrink-0"></div>
                                    <span><strong>Authority:</strong> Office of the Company Registrar, Nepal</span>
                                </div>
                            </div>
                        </div>

                        {/* Occupational License */}
                        <div className="space-y-4 sm:space-y-6">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800 border-b border-gray-100 pb-2">Occupational License</h3>
                            <div className="relative group cursor-pointer h-64 sm:h-80 rounded-xl overflow-hidden shadow-lg border-2 sm:border-4 border-white bg-slate-50">
                                <img 
                                    src={lisencePhoto} 
                                    alt="Occupational License" 
                                    className="w-full h-full object-contain sm:object-cover transition-transform group-hover:scale-[1.02] duration-300"
                                />
                                <div className="absolute inset-0 bg-primary/20 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                                    <a 
                                        href={lisencePhoto} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="bg-white/95 text-primary px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm shadow-xl hover:bg-white flex items-center gap-2 transition-transform"
                                    >
                                        <Target size={18} /> View Full License
                                    </a>
                                </div>
                            </div>
                            <div className="bg-green-50/50 p-4 sm:p-6 rounded-xl space-y-2.5 sm:space-y-3 border-l-4 border-green-500">
                                <div className="flex items-center gap-2.5 text-gray-700 text-xs sm:text-sm">
                                    <div className="w-2 h-2 bg-green-600 rounded-full shrink-0"></div>
                                    <span><strong>Department:</strong> Department of Foreign Employment</span>
                                </div>
                                <div className="flex items-center gap-2.5 text-gray-700 text-xs sm:text-sm">
                                    <div className="w-2 h-2 bg-green-600 rounded-full shrink-0"></div>
                                    <span><strong>License No:</strong> 1289/074/75</span>
                                </div>
                                <div className="flex items-center gap-2.5 text-gray-700 text-xs sm:text-sm">
                                    <div className="w-2 h-2 bg-green-600 rounded-full shrink-0"></div>
                                    <span><strong>Status:</strong> Legally Authorized Agency</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Embassy Registered Clients */}
                <div id="clients">
                    <EmbassyClients />
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
