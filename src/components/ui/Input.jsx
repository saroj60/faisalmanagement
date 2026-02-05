import React from 'react';

const Input = ({ label, id, error, className, ...props }) => {
    return (
        <div className={`mb-4 ${className || ''}`}>
            {label && (
                <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
                    {label}
                </label>
            )}
            <input
                id={id}
                className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-colors outline-none ${error ? 'border-red-500' : 'border-gray-300'
                    }`}
                {...props}
            />
            {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
        </div>
    );
};

export default Input;
