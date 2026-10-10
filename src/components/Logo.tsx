import React from 'react';

interface LogoProps {
  className?: string;
  isDarkTheme?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', isDarkTheme = false }) => {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* SalesFlo Geometric "S" Flow Icon */}
      <div className="relative w-8 h-8 flex items-center justify-center rounded-lg shadow-sm transition-transform duration-300 hover:scale-105">
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          aria-label="SalesFlo Logo Icon"
        >
          {/* Background tile */}
          <rect
            width="36"
            height="36"
            rx="8"
            fill={isDarkTheme ? '#1E324B' : '#F4E8D3'}
          />

          {/* Upper Flow Ribbon of 'S' */}
          <path
            d="M24.5 12C23.2 9.8 20.5 8.5 17.2 8.5C12.8 8.5 9.5 11.5 9.5 15.2C9.5 18.6 12.2 20.6 16 21.6L18.8 22.3C22.2 23.2 24.5 24.8 24.5 27.8C24.5 31.2 21.5 33.5 17.2 33.5C13.2 33.5 10.6 31.3 9.5 28.5"
            stroke="#B58B48"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Forward Lead Flow Spark / Dot */}
          <circle
            cx="25.5"
            cy="11.5"
            r="1.8"
            fill={isDarkTheme ? '#CBD5E1' : '#142438'}
          />

          {/* Inbound Flow Arrow / Momentum Accent */}
          <path
            d="M21 17.5L24 20.5L21 23.5"
            stroke="#B58B48"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.85"
          />
        </svg>
      </div>

      {/* Wordmark */}
      <span
        className={`font-heading text-xl font-bold tracking-tight transition-colors ${
          isDarkTheme ? 'text-white' : 'text-[#142438]'
        }`}
      >
        Sales<span className="text-[#B58B48]">Flo</span>
      </span>
    </div>
  );
};
