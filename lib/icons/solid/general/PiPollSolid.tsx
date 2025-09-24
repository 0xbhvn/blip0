import React from 'react';

/**
 * PiPollSolid icon from the solid style in general category.
 */
interface PiPollSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPollSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'poll icon',
  ...props
}: PiPollSolidProps): React.ReactElement {
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
      <path d="M6 5.9a1.1 1.1 0 0 0 0 2.2h.01a1.1 1.1 0 0 0 0-2.2z" fill="currentColor"/><path d="M2 7a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm4-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" fill="currentColor"/><path d="M12 7a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1Z" fill="currentColor"/><path d="M2 17a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z" fill="currentColor"/><path d="M12 17a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1Z" fill="currentColor"/>
    </svg>
  );
}
