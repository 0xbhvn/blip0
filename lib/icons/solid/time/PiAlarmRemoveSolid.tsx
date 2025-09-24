import React from 'react';

/**
 * PiAlarmRemoveSolid icon from the solid style in time category.
 */
interface PiAlarmRemoveSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAlarmRemoveSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'alarm-remove icon',
  ...props
}: PiAlarmRemoveSolidProps): React.ReactElement {
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
      <path d="M5.707 2.293a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0Z" fill="currentColor"/><path d="M18.293 2.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414Z" fill="currentColor"/><path fillRule="evenodd" d="M3 13a9 9 0 1 1 18 0 9 9 0 0 1-18 0Zm5.9-1a1 1 0 1 0 0 2h6.2a1 1 0 1 0 0-2z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
