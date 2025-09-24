import React from 'react';

/**
 * PiDoubleChevronLeftStroke icon from the stroke style in arrows-&-chevrons category.
 */
interface PiDoubleChevronLeftStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiDoubleChevronLeftStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'double-chevron-left icon',
  ...props
}: PiDoubleChevronLeftStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 8a20.4 20.4 0 0 0-3.894 3.702.47.47 0 0 0 0 .596A20.4 20.4 0 0 0 11 16m6-8a20.4 20.4 0 0 0-3.894 3.702.47.47 0 0 0 0 .596A20.4 20.4 0 0 0 17 16" fill="none"/>
    </svg>
  );
}
