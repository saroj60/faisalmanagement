import React, { useState } from 'react';
import SEO from '../components/common/SEO';
import Section from '../components/ui/Section';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { COMPANY_INFO } from '../utils/constants';

// We'll assume the user will place images in src/assets/portfolio/ as demand-1.jpg, etc.
// For now, we'll try to import them, and use placeholders if they're not there yet.
// Images are in the public/portfolio/ folder. Vite serves them from the root /.
const portfolioImages = Array.from({ length: 34 }, (_, i) => ({
    id: i + 1,
    src: `/portfolio/dc${i + 1}.jpg`,
    title: `Demand Letter ${i + 1}`,
    country: i < 15 ? 'UAE' : i < 25 ? 'Qatar' : 'Malaysia'
}));

const Portfolio = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>
            <SEO 
                title="Our Portfolio - Past Overseas Demand Letters & Deployments"
                description="Explore verified overseas recruitment demand letters and successful deployments processed by Faisal Management across UAE, Qatar, Malaysia, and Kuwait."
                keywords="Manpower Portfolio Nepal, Overseas Demand Letters Kathmandu, Verified Demand Letters Gulf, Overseas Recruitment Records"
                canonicalPath="/portfolio"
            />
            {/* Header Section */}
            <div className="bg-primary text-white py-12 sm:py-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1586717791821-3f44a563cc4c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4"
                    >
                        Our Portfolio
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-base sm:text-xl text-primary-light max-w-2xl mx-auto"
                    >
                        Explore our successful track record of connecting talented professionals with global opportunities.
                    </motion.p>
                </div>
            </div>

            <Section>
                <div className="mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 sm:mb-6">Past Demand Letters</h2>
                    <p className="text-gray-600 max-w-3xl leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                        {COMPANY_INFO.name} (formerly {COMPANY_INFO.formerName}) has a long history of excellence in overseas recruitment. Below are some of the legitimate demand letters we have processed for our valued clients over the years.
                    </p>

                    {/* Image Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
                        {portfolioImages.map((image) => (
                            <motion.div
                                key={image.id}
                                layoutId={`image-${image.id}`}
                                onClick={() => setSelectedImage(image)}
                                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg bg-white aspect-[3/4]"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <img
                                    src={image.src}
                                    alt={image.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    onError={(e) => {
                                        e.target.src = 'https://via.placeholder.com/600x800?text=Demand+Letter';
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-6">
                                    <h3 className="text-white font-bold text-base sm:text-lg">{image.title}</h3>
                                    <p className="text-gray-200 text-xs sm:text-sm">{image.country}</p>
                                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/20 p-2 rounded-full backdrop-blur-md">
                                        <ZoomIn className="text-white" size={18} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Lightbox / Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center p-4 sm:p-8"
                    >
                        <motion.button
                            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white hover:text-accent transition-colors p-2 bg-black/50 rounded-full z-50"
                            whileHover={{ rotate: 90 }}
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={28} className="sm:w-9 sm:h-9" />
                        </motion.button>

                        <motion.div
                            layoutId={`image-${selectedImage.id}`}
                            className="max-w-4xl max-h-[72vh] sm:max-h-[80vh] overflow-hidden flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.title}
                                className="max-w-full max-h-[72vh] sm:max-h-[80vh] object-contain rounded-lg shadow-2xl shadow-accent/20"
                                onError={(e) => {
                                    e.target.src = 'https://via.placeholder.com/800x1100?text=Large+Demand+Letter+View';
                                }}
                            />
                        </motion.div>
                        
                        <div className="mt-4 text-center text-white">
                            <h3 className="text-lg sm:text-2xl font-bold">{selectedImage.title}</h3>
                            <p className="text-xs sm:text-base text-gray-400">{selectedImage.country}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* CTA Section */}
            <div className="bg-gray-50 py-20 border-t border-gray-100">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-primary mb-6">Ready to Work With Us?</h2>
                    <p className="text-lg text-gray-600 mb-10">
                        Join the thousands of successful candidates who have found their dream careers abroad through our services.
                    </p>
                    <a 
                        href="/portfolio" 
                        className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent hover:shadow-xl transition-all"
                    >
                        View Our Work
                    </a>
                </div>
            </div>
        </>
    );
};

export default Portfolio;
