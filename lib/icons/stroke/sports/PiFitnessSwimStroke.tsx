import React from 'react';

/**
 * PiFitnessSwimStroke icon from the stroke style in sports category.
 */
interface PiFitnessSwimStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFitnessSwimStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'fitness-swim icon',
  ...props
}: PiFitnessSwimStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m2 21.19 2.55-1.02c1.55-.62 3.3-.503 4.756.314 1.675.94 3.723.94 5.397-.001a5.5 5.5 0 0 1 4.744-.314L22 21.19" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m2 16.188 2.55-1.02c1.55-.62 3.3-.503 4.756.314 1.675.94 3.723.94 5.397-.001a5.5 5.5 0 0 1 4.744-.314L22 16.188" fill="none"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M17.385 7.657a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m13.56 11.44 1.061-1.061-3.533-2.476a2 2 0 0 0-2.349.04L6 10" fill="none"/>
    </svg>
  );
}
