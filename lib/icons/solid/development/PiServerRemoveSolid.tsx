import React from 'react';

/**
 * PiServerRemoveSolid icon from the solid style in development category.
 */
interface PiServerRemoveSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiServerRemoveSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'server-remove icon',
  ...props
}: PiServerRemoveSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M2 6.4A3.4 3.4 0 0 1 5.4 3h13.2A3.4 3.4 0 0 1 22 6.4v1.2a3.4 3.4 0 0 1-3.4 3.4H5.4A3.4 3.4 0 0 1 2 7.6zM14 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" clipRule="evenodd" fill="currentColor"/><path d="M2 16.4A3.4 3.4 0 0 1 5.4 13h13.2a3.4 3.4 0 0 1 3.377 3H16a3 3 0 0 0-2.236 5H5.4A3.4 3.4 0 0 1 2 17.6z" fill="currentColor"/><path d="M16 18a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2z" fill="currentColor"/>
    </svg>
  );
}
