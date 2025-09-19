import React from 'react';

/**
 * PiCryptoCurrencyPolygonStroke icon from the stroke style in web3-&-crypto category.
 */
interface PiCryptoCurrencyPolygonStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCryptoCurrencyPolygonStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'crypto-currency-polygon icon',
  ...props
}: PiCryptoCurrencyPolygonStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M12 7.487v-.82L7.5 4 3 6.667V12l4.5 2.667 9-5.334L21 12v5.333L16.5 20 12 17.333v-.871" fill="none"/>
    </svg>
  );
}
