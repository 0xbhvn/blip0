import React from 'react';

/**
 * PiAirplaneTouchdownSolid icon from the solid style in automotive category.
 */
interface PiAirplaneTouchdownSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAirplaneTouchdownSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'airplane-touchdown icon',
  ...props
}: PiAirplaneTouchdownSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M7.77 1.237a1 1 0 0 1 .905-.203l.617.165a4 4 0 0 1 2.555 2.099l3.89 7.91 2.46.66a4 4 0 0 1 2.828 4.898 2 2 0 0 1-2.45 1.415L5.209 14.598a4 4 0 0 1-2.958-3.624l-.25-4.155A1 1 0 0 1 3.26 5.795l.673.18a2 2 0 0 1 .985.612h-.001L6.898 8.84l1.212.325-.688-7.068a1 1 0 0 1 .35-.86zM3 19a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
