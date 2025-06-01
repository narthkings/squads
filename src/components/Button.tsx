'use client'
import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ icon, children, className = "", ...props }) => {
    return (
        <button
            className={`inline-flex items-center gap-2 rounded-md px-6 py-4 text-sm font-semibold text-black bg-[#D0F091] hover:bg-[#c0e981] transition-colors ${className}`}
            {...props}
        >
            {children}
            {icon && <span className="w-5 h-5">{icon}</span>}
        </button>
    );
};

export default Button;