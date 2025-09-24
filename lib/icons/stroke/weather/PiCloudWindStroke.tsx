import React from 'react';

/**
 * PiCloudWindStroke icon from the stroke style in weather category.
 */
interface PiCloudWindStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCloudWindStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'cloud-wind icon',
  ...props
}: PiCloudWindStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 14h11a2 2 0 1 0-1-3.732M2 18h8a2 2 0 1 1-1 3.732M15.582 18h.918a5.5 5.5 0 0 0 2.168-10.556A6.5 6.5 0 0 0 6.017 9.026m0 0A4.5 4.5 0 0 0 3.671 10m2.346-.974c-.023.321-.023.652.002.974" fill="none"/>
    </svg>
  );
}
