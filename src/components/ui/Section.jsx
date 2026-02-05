import React from 'react';

const Section = ({
    children,
    className,
    id,
    bg = "white" // white, gray, primary
}) => {
    const bgColors = {
        white: "bg-white",
        gray: "bg-gray-50",
        primary: "bg-primary text-white",
        navy: "bg-primary",
    };

    return (
        <section
            id={id}
            className={`py-16 md:py-24 ${bgColors[bg] || bg} ${className || ''}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {children}
            </div>
        </section>
    );
};

export default Section;
