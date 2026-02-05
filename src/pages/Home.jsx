import React from 'react';
import Hero from '../components/home/Hero';

import Industries from '../components/home/Industries';
import WhyChooseUs from '../components/home/WhyChooseUs';
import VisaProcess from '../components/home/VisaProcess';
import Gallery from '../components/home/Gallery';
import Testimonials from '../components/home/Testimonials';
import Partners from '../components/home/Partners';

const Home = () => {
    return (
        <>
            <Hero />

            <Industries />
            <WhyChooseUs />
            <VisaProcess />
            <Gallery />
            <Testimonials />
            <Partners />
        </>
    );
};

export default Home;
