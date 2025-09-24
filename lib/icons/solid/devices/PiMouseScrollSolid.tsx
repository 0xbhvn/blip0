import React from 'react';

/**
 * PiMouseScrollSolid icon from the solid style in devices category.
 */
interface PiMouseScrollSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMouseScrollSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'mouse-scroll icon',
  ...props
}: PiMouseScrollSolidProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      
       style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path fillRule="evenodd" d="M4 10a8 8 0 1 1 16 0v4a8 8 0 1 1-16 0zm8-3.374c-.328 0-.656.11-.925.328A11 11 0 0 0 9.2 8.9a1 1 0 0 0 1.6 1.2A9 9 0 0 1 12 8.792q.665.594 1.2 1.308a1 1 0 0 0 1.6-1.2 11 11 0 0 0-1.875-1.946A1.47 1.47 0 0 0 12 6.626ZM10.8 13.9a1 1 0 1 0-1.6 1.2 11 11 0 0 0 1.875 1.946 1.47 1.47 0 0 0 1.85 0A11 11 0 0 0 14.8 15.1a1 1 0 1 0-1.6-1.2 9 9 0 0 1-1.2 1.308 9 9 0 0 1-1.2-1.308Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
