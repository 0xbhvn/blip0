import React from 'react';

/**
 * PiSolidjsStroke icon from the stroke style in development category.
 */
interface PiSolidjsStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSolidjsStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'solidjs icon',
  ...props
}: PiSolidjsStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m4 15.963 11.659-3.124c6.262-1.678 6.831 6.443.553 8.13C11.245 22.162 7.364 18.953 4 15.964Z" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.74 8.261 9.083 11.385c-6.262 1.678-6.832-6.443-.553-8.13 4.967-1.192 8.847 2.017 12.212 5.006Z" fill="none"/>
    </svg>
  );
}
