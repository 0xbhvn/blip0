import React from 'react';

/**
 * PiCoinbaseStroke icon from the stroke style in apps-&-social category.
 */
interface PiCoinbaseStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCoinbaseStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'coinbase icon',
  ...props
}: PiCoinbaseStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.25 12a3.75 3.75 0 0 0 7.118 1.65h5.481a9 9 0 1 1 0-3.3h-5.48A3.75 3.75 0 0 0 8.25 12Z" fill="none"/>
    </svg>
  );
}
