import React from 'react';

/**
 * PiSolanaFmStroke icon from the stroke style in apps-&-social category.
 */
interface PiSolanaFmStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSolanaFmStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'solana-fm icon',
  ...props
}: PiSolanaFmStrokeProps): React.ReactElement {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.515 12.5A7 7 0 0 1 9 18.58m9.988-6.08C18.728 17.79 14.355 22 9 22m-.515-10.5a7 7 0 0 1 6.942-6.094M5.012 11.5C5.272 6.21 9.645 2 15 2M9 15a3 3 0 0 0 3-3 3 3 0 0 1 3-3" fill="none"/>
    </svg>
  );
}
