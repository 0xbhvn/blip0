import React from 'react';

/**
 * PiUserThreeStroke icon from the stroke style in users category.
 */
interface PiUserThreeStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiUserThreeStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'user-three icon',
  ...props
}: PiUserThreeStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.092 10.516a4 4 0 0 1 0-7.033M3.029 15.417A3.75 3.75 0 0 0 1 18.75c0 1.036.7 1.91 1.655 2.17m18.69 0A2.25 2.25 0 0 0 23 18.75a3.75 3.75 0 0 0-2.03-3.333m-2.062-4.9a4 4 0 0 0 0-7.033M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM8.25 21h7.5A2.25 2.25 0 0 0 18 18.75 3.75 3.75 0 0 0 14.25 15h-4.5A3.75 3.75 0 0 0 6 18.75 2.25 2.25 0 0 0 8.25 21Z" fill="none"/>
    </svg>
  );
}
