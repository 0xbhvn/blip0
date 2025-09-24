import React from 'react';

/**
 * PiTrackpadStroke icon from the stroke style in devices category.
 */
interface PiTrackpadStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTrackpadStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'trackpad icon',
  ...props
}: PiTrackpadStrokeProps): JSX.Element {
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
      <rect width="20" height="18" x="2" y="3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" rx="4" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 13h10m10 0H12m0 0v8" fill="none"/>
    </svg>
  );
}
