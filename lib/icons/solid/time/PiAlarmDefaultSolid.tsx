import React from 'react';

/**
 * PiAlarmDefaultSolid icon from the solid style in time category.
 */
interface PiAlarmDefaultSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAlarmDefaultSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'alarm-default icon',
  ...props
}: PiAlarmDefaultSolidProps): JSX.Element {
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
      <path d="M5.707 2.293a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0Z" fill="currentColor"/><path d="M18.293 2.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414Z" fill="currentColor"/><path fillRule="evenodd" d="M3 13a9 9 0 1 1 18 0 9 9 0 0 1-18 0Zm10-3.102a1 1 0 1 0-2 0v3.819a1.5 1.5 0 0 0 .728 1.286l2.315 1.393a1 1 0 1 0 1.031-1.714L13 13.434z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
