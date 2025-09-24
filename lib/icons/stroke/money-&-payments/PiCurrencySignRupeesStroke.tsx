import React from 'react';

/**
 * PiCurrencySignRupeesStroke icon from the stroke style in money-&-payments category.
 */
interface PiCurrencySignRupeesStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCurrencySignRupeesStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'currency-sign-rupees icon',
  ...props
}: PiCurrencySignRupeesStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h6.02m0 0H19m-7.98 0a5 5 0 0 1 5 4.98V9M15 21l-9.5-7h5.52a5 5 0 0 0 5-5m0 0H5m11.02 0H19" fill="none"/>
    </svg>
  );
}
