import React from 'react';

/**
 * PiQueueSolid icon from the solid style in general category.
 */
interface PiQueueSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiQueueSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'queue icon',
  ...props
}: PiQueueSolidProps): JSX.Element {
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
      <path d="M6 3a4 4 0 1 0 0 8h12a4 4 0 0 0 0-8z" fill="currentColor"/><path d="M3 14a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2z" fill="currentColor"/><path d="M3 19a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2z" fill="currentColor"/>
    </svg>
  );
}
