import React from 'react';

/**
 * PiDoubleChevronRightStroke icon from the stroke style in arrows-&-chevrons category.
 */
interface PiDoubleChevronRightStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiDoubleChevronRightStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'double-chevron-right icon',
  ...props
}: PiDoubleChevronRightStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 8a20.4 20.4 0 0 1 3.894 3.702.47.47 0 0 1 0 .596A20.4 20.4 0 0 1 13 16M7 8a20.4 20.4 0 0 1 3.894 3.702.47.47 0 0 1 0 .596A20.4 20.4 0 0 1 7 16" fill="none"/>
    </svg>
  );
}
