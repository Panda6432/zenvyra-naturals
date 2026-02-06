import React from 'react';

export const EcoDermLogo = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 10L10 18V30C10 40 25 50 25 50C25 50 40 40 40 30V18L25 10Z" stroke="currentColor" strokeWidth="2" />
        <path d="M25 40V20" stroke="currentColor" strokeWidth="2" />
        <path d="M25 30H35" stroke="currentColor" strokeWidth="2" />
        <path d="M15 30H25" stroke="currentColor" strokeWidth="2" />
        <text x="50" y="38" fontFamily="sans-serif" fontSize="24" fontWeight="bold" fill="currentColor">ECO<tspan fontWeight="300">DERM</tspan></text>
    </svg>
);
