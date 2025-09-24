import React from 'react';

/**
 * PiPeopleMaleMaleStroke icon from the stroke style in users category.
 */
interface PiPeopleMaleMaleStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPeopleMaleMaleStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'people-male-male icon',
  ...props
}: PiPeopleMaleMaleStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.27 12.75A3 3 0 0 1 5.26 10h1.478a3 3 0 0 1 2.99 2.753L10 16.047 8 16l-.292 4.402a1.71 1.71 0 0 1-3.414.001L4 16H2z" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.27 12.75A3 3 0 0 1 17.26 10h1.478a3 3 0 0 1 2.99 2.753L22 16.047 20 16l-.292 4.402a1.71 1.71 0 0 1-3.414.001L16 16h-2z" fill="none"/>
    </svg>
  );
}
