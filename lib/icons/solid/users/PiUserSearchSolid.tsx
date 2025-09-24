import React from 'react';

/**
 * PiUserSearchSolid icon from the solid style in users category.
 */
interface PiUserSearchSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiUserSearchSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'user-search icon',
  ...props
}: PiUserSearchSolidProps): React.ReactElement {
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
      <path d="M12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z" fill="currentColor"/><path d="M8 14a5 5 0 0 0-5 5 3 3 0 0 0 3 3h7.682A6 6 0 0 1 11 17c0-1.093.292-2.117.803-3z" fill="currentColor"/><path fillRule="evenodd" d="M17 13a4 4 0 1 0 2.032 7.446l1.26 1.261a1 1 0 0 0 1.415-1.414l-1.261-1.261A4 4 0 0 0 17 13Zm-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
