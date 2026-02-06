import React from 'react';

export const VerdantLogo = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 45C25 45 15 35 15 25C15 15 25 10 25 10C25 10 35 15 35 25C35 35 25 45 25 45Z" stroke="currentColor" strokeWidth="2" />
        <path d="M25 45V20" stroke="currentColor" strokeWidth="2" />
        <path d="M25 30L35 20" stroke="currentColor" strokeWidth="2" />
        <path d="M25 35L15 25" stroke="currentColor" strokeWidth="2" />
        <text x="50" y="38" fontFamily="serif" fontSize="24" fill="currentColor" letterSpacing="1">VERDANT</text>
    </svg>
);
