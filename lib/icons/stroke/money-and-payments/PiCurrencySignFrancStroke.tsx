import React from 'react';

/**
 * PiCurrencySignFrancStroke icon from the stroke style in money-&-payments category.
 */
interface PiCurrencySignFrancStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCurrencySignFrancStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'currency-sign-franc icon',
  ...props
}: PiCurrencySignFrancStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16.5 4h-5.643c-.798 0-1.197 0-1.518.112A2 2 0 0 0 8.112 5.34C8 5.66 8 6.06 8 6.857V12m7.5 0H8m0 0H5m3 0v4m-3 0h3m0 0h4m-4 0v5" fill="none"/>
    </svg>
  );
}
