import React from 'react';

/**
 * PiPriorityBlockerSolid icon from the solid style in development category.
 */
interface PiPriorityBlockerSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPriorityBlockerSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'priority-blocker icon',
  ...props
}: PiPriorityBlockerSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm14.207-2.793a1 1 0 0 0-1.414-1.414l-7 7a1 1 0 1 0 1.414 1.414z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
