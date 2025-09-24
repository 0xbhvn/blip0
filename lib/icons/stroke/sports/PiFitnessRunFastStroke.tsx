import React from 'react';

/**
 * PiFitnessRunFastStroke icon from the stroke style in sports category.
 */
interface PiFitnessRunFastStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFitnessRunFastStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'fitness-run-fast icon',
  ...props
}: PiFitnessRunFastStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M17 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m17 20 2.078-2.771a1 1 0 0 0-.575-1.574l-2.76-.637a2 2 0 0 1-1.417-2.667L16 8h-2.528a4 4 0 0 0-3.578 2.211L9 12" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m12.5 17-.906 1.812a5 5 0 0 1-1.699 1.924L8 22" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9.5.02.031a2 2 0 0 0 2.56.68L22 10" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4H5m1 5H2m5 6H3m2 5H2" fill="none"/>
    </svg>
  );
}
