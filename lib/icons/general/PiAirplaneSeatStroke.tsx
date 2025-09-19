import React from 'react';

/**
 * PiAirplaneSeatStroke icon from the stroke style in general category.
 */
interface PiAirplaneSeatStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAirplaneSeatStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'airplane-seat icon',
  ...props
}: PiAirplaneSeatStrokeProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m6.837 8.635 3.53 6.114a2 2 0 0 0 2.732.732l2.494-1.44a1 1 0 0 1 1.283.244l3.427 4.307" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.837 4.646a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15.236 17.492-1.262.652a4.5 4.5 0 0 1-5.962-1.749L4.33 10.018" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2z" fill="none"/>
    </svg>
  );
}
