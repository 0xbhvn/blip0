import React from 'react';

/**
 * PiAcOnSlowSolid icon from the solid style in appliances category.
 */
interface PiAcOnSlowSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAcOnSlowSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'ac-on-slow icon',
  ...props
}: PiAcOnSlowSolidProps): JSX.Element {
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
      <path d="M4 3a3 3 0 0 0-3 3v6a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V6a3 3 0 0 0-3-3zm11 5a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1Z" fill="currentColor"/><path d="M8 16a1 1 0 1 0-2 0v2.8a1 1 0 1 0 2 0z" fill="currentColor"/><path d="M13 16a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0z" fill="currentColor"/><path d="M18 16a1 1 0 1 0-2 0v2.8a1 1 0 1 0 2 0z" fill="currentColor"/>
    </svg>
  );
}
