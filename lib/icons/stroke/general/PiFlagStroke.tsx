import React from 'react';

/**
 * PiFlagStroke icon from the stroke style in general category.
 */
interface PiFlagStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFlagStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'flag icon',
  ...props
}: PiFlagStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v18m1.472-7.483a6.6 6.6 0 0 1 5.377.522 6.6 6.6 0 0 0 5.218.573l1.309-.405A.89.89 0 0 0 19 13.36V4.485c0-.89-1.666-.067-2.045.05A6.03 6.03 0 0 1 12 3.904a6.03 6.03 0 0 0-4.955-.633L5.6 3.717a.85.85 0 0 0-.6.813v8.927c0 .756 1.138.173 1.472.06Z" fill="none"/>
    </svg>
  );
}
