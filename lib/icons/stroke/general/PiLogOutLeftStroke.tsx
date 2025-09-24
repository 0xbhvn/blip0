import React from 'react';

/**
 * PiLogOutLeftStroke icon from the stroke style in general category.
 */
interface PiLogOutLeftStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiLogOutLeftStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'log-out-left icon',
  ...props
}: PiLogOutLeftStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.812 9a15 15 0 0 0-2.655 2.556A.7.7 0 0 0 3 12m2.812 3a15 15 0 0 1-2.655-2.556A.7.7 0 0 1 3 12m0 0h13m-5-7.472A6 6 0 0 1 21 9v6a6 6 0 0 1-10 4.472" fill="none"/>
    </svg>
  );
}
