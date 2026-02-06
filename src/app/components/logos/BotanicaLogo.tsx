import React from 'react';

export const BotanicaLogo = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 30C25 30 20 20 30 20C40 20 35 30 35 30" stroke="currentColor" strokeWidth="2" />
        <path d="M25 30C25 30 20 40 30 40C40 40 35 30 35 30" stroke="currentColor" strokeWidth="2" />
        <path d="M25 30C25 30 15 35 15 25C15 15 25 20 25 30" stroke="currentColor" strokeWidth="2" />
        <path d="M35 30C35 30 45 25 45 35C45 45 35 40 35 30" stroke="currentColor" strokeWidth="2" />
        <circle cx="30" cy="30" r="2" fill="currentColor" />
        <text x="60" y="38" fontFamily="serif" fontStyle="italic" fontSize="26" fill="currentColor">Botanica</text>
    </svg>
);
