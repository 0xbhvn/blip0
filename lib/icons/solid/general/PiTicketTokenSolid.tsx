import React from 'react';

/**
 * PiTicketTokenSolid icon from the solid style in general category.
 */
interface PiTicketTokenSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTicketTokenSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'ticket-token icon',
  ...props
}: PiTicketTokenSolidProps): JSX.Element {
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
      <path d="M6 3a5 5 0 0 0-5 5v.4A1.6 1.6 0 0 0 2.6 10 1.4 1.4 0 0 1 4 11.4v1.2A1.4 1.4 0 0 1 2.6 14 1.6 1.6 0 0 0 1 15.6v.4a5 5 0 0 0 5 5h12a5 5 0 0 0 5-5v-.4a1.6 1.6 0 0 0-1.6-1.6 1.4 1.4 0 0 1-1.4-1.4v-1.2a1.4 1.4 0 0 1 1.4-1.4A1.6 1.6 0 0 0 23 8.4V8a5 5 0 0 0-5-5zm4 1a1 1 0 0 1 1 1v1.102a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1Zm1 5.401v1a1 1 0 1 1-2 0v-1a1 1 0 1 1 2 0Zm-1 3.3a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1ZM11 18v1a1 1 0 1 1-2 0v-1a1 1 0 1 1 2 0Z" fill="currentColor"/>
    </svg>
  );
}
