import React from 'react';

/**
 * PiScissorsLeftStroke icon from the stroke style in editing category.
 */
interface PiScissorsLeftStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiScissorsLeftStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'scissors-left icon',
  ...props
}: PiScissorsLeftStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m3 20.4 8.4-8.4m0 0L3 3.6m8.4 8.4 3.454 3.455M11.4 12l3.454-3.455m0 6.91a3.6 3.6 0 1 1 5.092 5.092 3.6 3.6 0 0 1-5.092-5.092Zm0-6.91a3.6 3.6 0 1 1 5.091-5.09 3.6 3.6 0 0 1-5.09 5.09Z" fill="none"/>
    </svg>
  );
}
