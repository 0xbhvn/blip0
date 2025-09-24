import React from 'react';

/**
 * PiListArrowDownStroke icon from the stroke style in general category.
 */
interface PiListArrowDownStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiListArrowDownStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'list-arrow-down icon',
  ...props
}: PiListArrowDownStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12h8m-8 6h8M4 6h16m-4 10.186a15 15 0 0 0 2.556 2.654c.13.105.287.157.444.157m3-2.811a15 15 0 0 1-2.556 2.654.7.7 0 0 1-.444.157m0 0V11.5" fill="none"/>
    </svg>
  );
}
