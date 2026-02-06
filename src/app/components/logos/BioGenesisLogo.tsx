import React from 'react';

export const BioGenesisLogo = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="30" r="8" stroke="currentColor" strokeWidth="2" />
        <circle cx="35" cy="20" r="5" stroke="currentColor" strokeWidth="2" />
        <circle cx="35" cy="40" r="5" stroke="currentColor" strokeWidth="2" />
        <path d="M27 26L31 23" stroke="currentColor" strokeWidth="2" />
        <path d="M27 34L31 37" stroke="currentColor" strokeWidth="2" />
        <text x="55" y="38" fontFamily="sans-serif" fontSize="22" fontWeight="bold" fill="currentColor">BIO<tspan fontWeight="light">GENESIS</tspan></text>
    </svg>
);
