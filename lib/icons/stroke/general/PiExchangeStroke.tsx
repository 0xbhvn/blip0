import React from 'react';

/**
 * PiExchangeStroke icon from the stroke style in general category.
 */
interface PiExchangeStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiExchangeStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'exchange icon',
  ...props
}: PiExchangeStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 15.812a15 15 0 0 0-2.556-2.654A.7.7 0 0 0 7 13m-3 2.812a15 15 0 0 1 2.557-2.654A.7.7 0 0 1 7 13m0 0v8M20 8.19a15 15 0 0 1-2.556 2.654A.7.7 0 0 1 17 11m-3-2.81a15 15 0 0 0 2.557 2.654.7.7 0 0 0 .443.157m0 0V3M7 2.85a3.15 3.15 0 1 0 0 6.3 3.15 3.15 0 0 0 0-6.3Zm10 12a3.15 3.15 0 1 0 0 6.3 3.15 3.15 0 0 0 0-6.3Z" fill="none"/>
    </svg>
  );
}
