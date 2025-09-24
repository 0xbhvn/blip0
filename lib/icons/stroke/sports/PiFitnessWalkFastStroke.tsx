import React from 'react';

/**
 * PiFitnessWalkFastStroke icon from the stroke style in sports category.
 */
interface PiFitnessWalkFastStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFitnessWalkFastStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'fitness-walk-fast icon',
  ...props
}: PiFitnessWalkFastStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M14 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m21 22-2.406-4.812a5 5 0 0 0-1.699-1.924l-1.004-.67A2 2 0 0 1 15 12.93V7l-2.58 1.935a5 5 0 0 0-1.85 2.787L10 14" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m13.5 17.5-.094.47a5 5 0 0 1-2.13 3.179L10 22" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 10h-1.586C19.51 10 18.64 9.64 18 9" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 4H5m2 5H2m4 6H3m4 5H2" fill="none"/>
    </svg>
  );
}
