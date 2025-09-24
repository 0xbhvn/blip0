import React from 'react';

/**
 * PiTimerRemoveStroke icon from the stroke style in time category.
 */
interface PiTimerRemoveStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTimerRemoveStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'timer-remove icon',
  ...props
}: PiTimerRemoveStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 14h6M12 2v4m0 0a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm-2-4h4m5.366 3.322 1.06 1.06" fill="none"/>
    </svg>
  );
}
