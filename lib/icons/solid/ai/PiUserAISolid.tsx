import React from 'react';

/**
 * PiUserAISolid icon from the solid style in ai category.
 */
interface PiUserAISolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiUserAISolid({
  size = 24,
  color,
  className,
  ariaLabel = 'user-ai icon',
  ...props
}: PiUserAISolidProps): React.ReactElement {
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
      <path d="M7 7a5 5 0 1 1 10 0A5 5 0 0 1 7 7Z" fill="currentColor"/><path d="M8 14h6.372a6 6 0 0 1-.473.21 3 3 0 0 0-1.514 4.261A3 3 0 0 0 11.171 22H6a3 3 0 0 1-3-3 5 5 0 0 1 5-5Z" fill="currentColor"/><path d="M18 13a1 1 0 0 1 .93.633c.293.743.566 1.19.896 1.523s.781.614 1.54.914a1 1 0 0 1 0 1.86c-.759.3-1.21.582-1.54.914s-.603.78-.896 1.523a1 1 0 0 1-1.86 0c-.293-.743-.566-1.19-.896-1.523s-.781-.614-1.54-.914a1 1 0 0 1 0-1.86c.759-.3 1.21-.582 1.54-.914s.603-.78.896-1.523A1 1 0 0 1 18 13Z" fill="currentColor"/><path d="M13 21a1 1 0 0 1 1-1h.001a1 1 0 1 1 0 2H14a1 1 0 0 1-1-1Z" fill="currentColor"/>
    </svg>
  );
}
