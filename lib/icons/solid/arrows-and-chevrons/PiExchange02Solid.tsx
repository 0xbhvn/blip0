import React from 'react';

/**
 * PiExchange02Solid icon from the solid style in arrows-&-chevrons category.
 */
interface PiExchange02SolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiExchange02Solid({
  size = 24,
  color,
  className,
  ariaLabel = 'exchange-02 icon',
  ...props
}: PiExchange02SolidProps): React.ReactElement {
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
      <path d="M17.028 5.075a1 1 0 0 0-1.578-.89 21.6 21.6 0 0 0-4.074 3.78 1.62 1.62 0 0 0 0 2.07 21.6 21.6 0 0 0 4.074 3.78 1 1 0 0 0 1.578-.89l-.165-2.2A23 23 0 0 1 16.82 10H20a1 1 0 1 0 0-2h-3.18q.015-.363.043-.725z" fill="currentColor"/><path d="M6.972 11.075a1 1 0 0 1 1.578-.89 21.6 21.6 0 0 1 4.074 3.78 1.62 1.62 0 0 1 0 2.07 21.6 21.6 0 0 1-4.074 3.78 1 1 0 0 1-1.578-.89l.165-2.2q.028-.362.043-.725H4a1 1 0 1 1 0-2h3.18q-.015-.363-.043-.725z" fill="currentColor"/>
    </svg>
  );
}
