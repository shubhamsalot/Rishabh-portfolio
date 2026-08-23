import React from 'react';

export const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export const LinkedinIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const BehanceIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M8.2 11.5c1.4-.4 2.2-1.5 2.2-2.9 0-2.3-1.8-3.6-4.5-3.6H0v14h6.3c2.9 0 4.8-1.5 4.8-4 0-1.8-1.1-3.1-2.9-3.5zm-5-4.5h2.5c1.5 0 2.4.7 2.4 1.8 0 1.2-.9 1.9-2.4 1.9H3.2V7zm2.8 9.9H3.2v-4.1h2.8c1.7 0 2.7.7 2.7 2.1 0 1.3-1 2-2.7 2zM21.7 10.7c-3 0-5.1 2.1-5.1 5.3 0 3.3 2.1 5.4 5.3 5.4 2.4 0 4.1-1.2 4.8-3.1h-2.3c-.4.9-1.3 1.3-2.5 1.3-1.6 0-2.7-1-2.9-2.6h7.9c.1-.4.1-.7.1-1.1 0-3.1-2.1-5.2-5.3-5.2zm-2.7 4.1c.3-1.4 1.2-2.2 2.7-2.2 1.4 0 2.4.8 2.6 2.2H19zm-.6-6.3h5.4V7.2h-5.4v1.3z" />
  </svg>
);
