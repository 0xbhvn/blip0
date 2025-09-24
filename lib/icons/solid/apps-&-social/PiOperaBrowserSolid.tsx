import React from 'react';

/**
 * PiOperaBrowserSolid icon from the solid style in apps-&-social category.
 */
interface PiOperaBrowserSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiOperaBrowserSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'opera-browser icon',
  ...props
}: PiOperaBrowserSolidProps): React.ReactElement {
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
      <path d="M16.395 6.377a1 1 0 1 0-1.563 1.247 7.02 7.02 0 0 1 1.531 4.379 7.02 7.02 0 0 1-1.531 4.374 1 1 0 0 0 1.563 1.247 9.02 9.02 0 0 0 0-11.247Z" fill="currentColor"/><path fillRule="evenodd" d="M12 1.85c2.52 0 4.826.919 6.6 2.44a10.13 10.13 0 0 1 3.549 7.862c-.081 5.536-4.594 9.998-10.15 9.998-5.605 0-10.15-4.544-10.15-10.15S6.395 1.85 12 1.85Zm.514 3.666a7 7 0 0 1 2.685-.534q.545 0 1.086.087a8.127 8.127 0 0 1-.018 13.853 6.937 6.937 0 0 1-8.085-6.912V12a7.02 7.02 0 0 1 4.332-6.484Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
