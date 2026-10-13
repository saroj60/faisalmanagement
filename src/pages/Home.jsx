import React from 'react';
import SEO from '../components/common/SEO';
import Hero from '../components/home/Hero';
import Industries from '../components/home/Industries';
import WhyChooseUs from '../components/home/WhyChooseUs';
import VisaProcess from '../components/home/VisaProcess';
import Gallery from '../components/home/Gallery';
import Testimonials from '../components/home/Testimonials';
import Partners from '../components/home/Partners';
import FAQ, { FAQ_DATA } from '../components/home/FAQ';

const Home = () => {
    // Generate FAQ Schema for Google Rich Snippets
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": FAQ_DATA.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };

    return (
        <>
            <SEO 
                title="Premier Manpower Recruitment Agency in Nepal"
                description="Faisal Management Services (Govt. Lic. No. 1289/074/75) is Nepal's leading overseas recruitment consultancy, supplying skilled, technical and professional workforce to Kuwait, UAE, Qatar, Saudi Arabia, Oman, and Malaysia."
                keywords="Faisal Management, Manpower Agency Nepal, Overseas Recruitment Agency Kathmandu, Foreign Employment Agency Nepal, Kuwait Manpower Recruitment, Gulf Jobs Nepal, Manpower in Pinglasthan"
                canonicalPath="/"
                schema={faqSchema}
            />
            <Hero />
            <Industries />
            <WhyChooseUs />
            <VisaProcess />
            <Gallery />
            <Testimonials />
            <Partners />
            <FAQ />
        </>
    );
};

export default Home;
