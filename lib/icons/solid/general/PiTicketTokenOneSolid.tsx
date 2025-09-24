import React from 'react';

/**
 * PiTicketTokenOneSolid icon from the solid style in general category.
 */
interface PiTicketTokenOneSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTicketTokenOneSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'ticket-token-one icon',
  ...props
}: PiTicketTokenOneSolidProps): JSX.Element {
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
      <path d="M1 8a5 5 0 0 1 5-5h12a5 5 0 0 1 5 5v.4a1.6 1.6 0 0 1-1.6 1.6 1.4 1.4 0 0 0-1.4 1.4v1.2a1.4 1.4 0 0 0 1.4 1.4 1.6 1.6 0 0 1 1.6 1.6v.4a5 5 0 0 1-5 5H6a5 5 0 0 1-5-5v-.4A1.6 1.6 0 0 1 2.6 14 1.4 1.4 0 0 0 4 12.6v-1.2A1.4 1.4 0 0 0 2.6 10 1.6 1.6 0 0 1 1 8.4zm12 1.377a1 1 0 0 0-1.238-.97c-1.003.245-1.739.932-2.156 1.768A1 1 0 0 0 11 11.488V14h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1z" fill="currentColor"/>
    </svg>
  );
}
