import React from 'react';

/**
 * PiFitnessWeightLiftingStroke icon from the stroke style in sports category.
 */
interface PiFitnessWeightLiftingStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFitnessWeightLiftingStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'fitness-weight-lifting icon',
  ...props
}: PiFitnessWeightLiftingStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M11 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 7v4m0-4h-.681A2 2 0 0 0 9.48 8.212L7 14m5-7h.681a2 2 0 0 1 1.839 1.212L17 14" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 17-1 2-1 3" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 17 1 2 1 3" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 14h1m0 0h16M4 14v-2m0 2v2m16-2h1m-1 0v-2m0 2v2" fill="none"/>
    </svg>
  );
}
