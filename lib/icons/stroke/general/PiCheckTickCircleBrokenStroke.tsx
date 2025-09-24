import React from 'react';

/**
 * PiCheckTickCircleBrokenStroke icon from the stroke style in general category.
 */
interface PiCheckTickCircleBrokenStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCheckTickCircleBrokenStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'check-tick-circle-broken icon',
  ...props
}: PiCheckTickCircleBrokenStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m21.035 5.403-.793.541a25.64 25.64 0 0 0-7.798 8.447l-.36.629L8.61 11M21 10.336a9.15 9.15 0 0 1-16.365 7.092A9.15 9.15 0 0 1 16.254 3.897" fill="none"/>
    </svg>
  );
}
