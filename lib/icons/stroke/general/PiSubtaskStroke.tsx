import React from 'react';

/**
 * PiSubtaskStroke icon from the stroke style in general category.
 */
interface PiSubtaskStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSubtaskStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'subtask icon',
  ...props
}: PiSubtaskStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 10h12c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C21 8.398 21 7.932 21 7s0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C19.398 4 18.932 4 18 4H6c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C3 5.602 3 6.068 3 7s0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C4.602 10 5.068 10 6 10Zm0 0v2a5 5 0 0 0 5 5h2m0 0c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C14.602 20 15.068 20 16 20h2c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C21 18.398 21 17.932 21 17s0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C19.398 14 18.932 14 18 14h-2c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C13 15.602 13 16.068 13 17Z" fill="none"/>
    </svg>
  );
}
