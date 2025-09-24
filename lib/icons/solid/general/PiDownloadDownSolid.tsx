import React from 'react';

/**
 * PiDownloadDownSolid icon from the solid style in general category.
 */
interface PiDownloadDownSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiDownloadDownSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'download-down icon',
  ...props
}: PiDownloadDownSolidProps): React.ReactElement {
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
      <path d="M13 4a1 1 0 1 0-2 0v7.322a29 29 0 0 1-1.9-.128 1 1 0 0 0-.9 1.595 16 16 0 0 0 2.727 2.83 1.7 1.7 0 0 0 2.146 0 16 16 0 0 0 2.727-2.83 1 1 0 0 0-.9-1.595q-.948.095-1.9.128z" fill="currentColor"/><path d="M4 15a1 1 0 1 0-2 0 6 6 0 0 0 6 6h8a6 6 0 0 0 6-6 1 1 0 1 0-2 0 4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Z" fill="currentColor"/>
    </svg>
  );
}
