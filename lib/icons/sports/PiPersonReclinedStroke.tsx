import React from 'react';

/**
 * PiPersonReclinedStroke icon from the stroke style in sports category.
 */
interface PiPersonReclinedStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPersonReclinedStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'person-reclined icon',
  ...props
}: PiPersonReclinedStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m6.837 8.635 3.53 6.114a2 2 0 0 0 2.732.732l2.494-1.44a1 1 0 0 1 1.283.244l3.427 4.307" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.837 4.647a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14.982 18.475-.838.432a5 5 0 0 1-6.625-1.942L4.076 11" fill="none"/>
    </svg>
  );
}
