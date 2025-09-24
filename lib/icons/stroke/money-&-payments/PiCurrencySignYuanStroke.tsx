import React from 'react';

/**
 * PiCurrencySignYuanStroke icon from the stroke style in money-&-payments category.
 */
interface PiCurrencySignYuanStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCurrencySignYuanStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'currency-sign-yuan icon',
  ...props
}: PiCurrencySignYuanStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 3 7 8.1m0 0L19 3m-7 8.1v.9m0 0v4m0-4H6m6 0h6m-6 4v5m0-5H6m6 0h6" fill="none"/>
    </svg>
  );
}
