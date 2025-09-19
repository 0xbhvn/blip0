import React from 'react';

/**
 * PiMedicinePillTabletsStroke icon from the stroke style in medical category.
 */
interface PiMedicinePillTabletsStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMedicinePillTabletsStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'medicine-pill-tablets icon',
  ...props
}: PiMedicinePillTabletsStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m12.306 15.283 9.39 3.437m-9.39-3.437a5 5 0 0 0 9.39 3.437m-9.39-3.437a5 5 0 0 1 9.39 3.437M2.115 8.056l9.775-2.11m-9.775 2.11a5 5 0 0 0 9.775-2.11m-9.775 2.11a5 5 0 0 1 9.775-2.11" fill="none"/>
    </svg>
  );
}
