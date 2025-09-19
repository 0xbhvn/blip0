import React from 'react';

/**
 * PiMediaSpeed1xStroke icon from the stroke style in media category.
 */
interface PiMediaSpeed1xStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMediaSpeed1xStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'media-speed-1x icon',
  ...props
}: PiMediaSpeed1xStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.022 19V5c-1.805.442-3.185 1.685-4.003 3.323" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m13 19 3.5-4.5m0 0L20 10m-3.5 4.5L20 19m-3.5-4.5L13 10" fill="none"/>
    </svg>
  );
}
