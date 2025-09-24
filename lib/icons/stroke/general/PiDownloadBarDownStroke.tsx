import React from 'react';

/**
 * PiDownloadBarDownStroke icon from the stroke style in general category.
 */
interface PiDownloadBarDownStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiDownloadBarDownStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'download-bar-down icon',
  ...props
}: PiDownloadBarDownStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5m1-9.83a30.2 30.2 0 0 0 5.406 5.62c.174.14.384.21.594.21m6-5.83a30.2 30.2 0 0 1-5.406 5.62A.95.95 0 0 1 12 16m0 0V4" fill="none"/>
    </svg>
  );
}
