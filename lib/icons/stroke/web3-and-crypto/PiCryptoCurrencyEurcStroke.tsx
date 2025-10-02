import React from 'react';

/**
 * PiCryptoCurrencyEurcStroke icon from the stroke style in web3-&-crypto category.
 */
interface PiCryptoCurrencyEurcStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCryptoCurrencyEurcStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'crypto-currency-eurc icon',
  ...props
}: PiCryptoCurrencyEurcStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 20.457A9.15 9.15 0 0 1 2.85 12 9.15 9.15 0 0 1 8.5 3.543m7 0A9.15 9.15 0 0 1 21.15 12a9.15 9.15 0 0 1-5.65 8.456m-.584-12.672a4.36 4.36 0 0 0-2.5-.784c-2.28 0-4.116 1.772-4.363 4m6.863 5.216A4.377 4.377 0 0 1 8.26 14m0 0H7m1.261 0H11m-2.74 0c-.314-.949-.316-2.019-.208-3M7 11h1.053m0 0H12" fill="none"/>
    </svg>
  );
}
