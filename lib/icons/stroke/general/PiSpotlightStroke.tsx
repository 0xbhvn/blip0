import React from 'react';

/**
 * PiSpotlightStroke icon from the stroke style in general category.
 */
interface PiSpotlightStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSpotlightStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'spotlight icon',
  ...props
}: PiSpotlightStrokeProps): React.ReactElement {
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
      <g clipPath="url(#a)"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20.5c0 .828 3.134 2 7 2s7-1.172 7-2c0-.258-.304-.549-.838-.828M9 20.5c0-.829 3.134-2 7-2 2.663 0 4.979.556 6.162 1.172M9 20.5 4.718 10m4.61-3 12.834 12.673M6.614 4.319 5.467 2.681A2 2 0 0 0 2.19 4.975l1.147 1.639z" fill="none"/></g><defs><clipPath id="a"><path stroke="currentColor" d="M0 0h24v24H0z" fill="none"/></clipPath></defs>
    </svg>
  );
}
