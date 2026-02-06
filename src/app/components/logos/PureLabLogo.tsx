import React from 'react';

export const PureLabLogo = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 10C30 10 15 35 15 42C15 50 21 55 30 55C39 55 45 50 45 42C45 35 30 10 30 10Z" stroke="currentColor" strokeWidth="2" />
        <path d="M30 40V25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <text x="60" y="38" fontFamily="sans-serif" fontSize="24" fontWeight="600" fill="currentColor" letterSpacing="-1">PureLab</text>
    </svg>
);
