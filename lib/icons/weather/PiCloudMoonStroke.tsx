import React from 'react';

/**
 * PiCloudMoonStroke icon from the stroke style in weather category.
 */
interface PiCloudMoonStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCloudMoonStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'cloud-moon icon',
  ...props
}: PiCloudMoonStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.617 14.933a5.5 5.5 0 0 1-.126-1.711m12.404-.4a4.8 4.8 0 0 0-1.45-.97A5.64 5.64 0 0 0 11.024 8m6.872 4.821A4.767 4.767 0 0 1 14.566 21H5.9a3.9 3.9 0 0 1-.419-7.777h.01m12.404-.4A5.5 5.5 0 0 0 22 7.5v-.035A4 4 0 0 1 16.535 2H16.5a5.5 5.5 0 0 0-5.477 6m0 0q-.378.006-.743.06c-2.64.384-4.576 2.637-4.789 5.162" fill="none"/>
    </svg>
  );
}
