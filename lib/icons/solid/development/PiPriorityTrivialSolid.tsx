import React from 'react';

/**
 * PiPriorityTrivialSolid icon from the solid style in development category.
 */
interface PiPriorityTrivialSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPriorityTrivialSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'priority-trivial icon',
  ...props
}: PiPriorityTrivialSolidProps): JSX.Element {
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
      <path d="M12 21a2.5 2.5 0 0 1-1.157-.274c-2.107-1.103-4.03-2.362-5.727-3.758A3.02 3.02 0 0 1 4 14.63V4a1 1 0 0 1 1.662-.75c1.749 1.545 3.8 2.941 6.108 4.149.04.02.121.045.23.045s.19-.025.23-.045c2.307-1.208 4.36-2.604 6.108-4.148A1 1 0 0 1 20 4v10.631c0 .893-.398 1.747-1.116 2.337-1.698 1.396-3.62 2.655-5.727 3.758A2.5 2.5 0 0 1 12 21Z" fill="currentColor"/>
    </svg>
  );
}
