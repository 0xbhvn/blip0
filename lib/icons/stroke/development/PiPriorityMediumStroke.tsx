import React from 'react';

/**
 * PiPriorityMediumStroke icon from the stroke style in development category.
 */
interface PiPriorityMediumStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPriorityMediumStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'priority-medium icon',
  ...props
}: PiPriorityMediumStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 9h12M6 15h12" fill="none"/>
    </svg>
  );
}
