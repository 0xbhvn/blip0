import React from 'react';

/**
 * PiCurrencySignEuroStroke icon from the stroke style in money-&-payments category.
 */
interface PiCurrencySignEuroStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCurrencySignEuroStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'currency-sign-euro icon',
  ...props
}: PiCurrencySignEuroStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 5.255A7.002 7.002 0 0 0 6.07 10M17 18.745A7.002 7.002 0 0 1 6.07 14m0-4A7 7 0 0 0 6 11v2q0 .51.07 1m0-4H3m3.07 0H14m-7.93 4H3m3.07 0H13" fill="none"/>
    </svg>
  );
}
