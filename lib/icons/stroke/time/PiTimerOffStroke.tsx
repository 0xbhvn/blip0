import React from 'react';

/**
 * PiTimerOffStroke icon from the stroke style in time category.
 */
interface PiTimerOffStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTimerOffStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'timer-off icon',
  ...props
}: PiTimerOffStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2v4m0-4h-2m2 0h2m-2 4a8 8 0 0 0-6.568 12.568M12 6c1.698 0 3.273.53 4.568 1.432m2.614 3.04a8 8 0 0 1-10.71 10.71m8.096-13.75L22 2m-5.432 5.432L5.432 18.568m0 0L2 22" fill="none"/>
    </svg>
  );
}
