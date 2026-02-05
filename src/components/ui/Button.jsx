import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn'; // We need to create this utility or use clsx directly

// Simple utility for className merging if we don't have a separate file yet, 
// but sticking to the plan, I should probably create the utility file or include it here.
// I'll assume I'll create src/utils/cn.js next.

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    className,
    onClick,
    type = 'button',
    ...props
}) {
    const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        primary: "bg-primary text-white hover:bg-primary-light focus:ring-primary",
        secondary: "bg-accent text-primary hover:bg-accent-hover focus:ring-accent",
        outline: "border border-primary text-primary hover:bg-gray-50 focus:ring-primary",
        ghost: "text-primary hover:bg-gray-100",
    };

    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-5 py-2.5 text-base",
        lg: "px-6 py-3 text-lg",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className || ''}`}
            onClick={onClick}
            type={type}
            {...props}
        >
            {children}
        </motion.button>
    );
}
