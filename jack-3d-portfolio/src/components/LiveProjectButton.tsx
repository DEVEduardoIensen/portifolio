import React from 'react';

interface LiveProjectButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({ children = "Ver Projeto", ...props }) => {
  return (
    <button
      {...props}
      className={`
        rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA]
        px-8 py-3 sm:px-10 sm:py-3.5
        text-sm sm:text-base font-medium uppercase tracking-widest
        transition-colors hover:bg-[#D7E2EA]/10
        ${props.className || ''}
      `}
    >
      {children}
    </button>
  );
};
