import React from 'react';

/**
 * PiFitnessWalkStroke icon from the stroke style in sports category.
 */
interface PiFitnessWalkStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFitnessWalkStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'fitness-walk icon',
  ...props
}: PiFitnessWalkStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M11 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m18 22-2.406-4.812a5 5 0 0 0-1.699-1.924l-1.004-.67A2 2 0 0 1 12 12.93V7L9.42 8.935a5 5 0 0 0-1.85 2.787L7 14" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m10.5 17.5-.013.063a6 6 0 0 1-2.555 3.816L7 22" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 10h-1.586C16.51 10 15.64 9.64 15 9" fill="none"/>
    </svg>
  );
}
