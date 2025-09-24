import React from 'react';

/**
 * PiAlarmOffSolid icon from the solid style in time category.
 */
interface PiAlarmOffSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAlarmOffSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'alarm-off icon',
  ...props
}: PiAlarmOffSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M22.707 2.707a1 1 0 0 0-1.414-1.414L20 2.586l-.293-.293a1 1 0 1 0-1.414 1.414l.293.293-1.544 1.544A9 9 0 0 0 4.544 18.042l-3.251 3.25a1 1 0 1 0 1.414 1.415zM11 11.586l1.962-1.962A1 1 0 0 0 11 9.898z" clipRule="evenodd" fill="currentColor"/><path d="M5.707 3.707a1 1 0 0 0-1.414-1.414l-3 3a1 1 0 0 0 1.414 1.414z" fill="currentColor"/><path d="m8.46 19.777 4.209-4.208 1.374.827a1 1 0 1 0 1.031-1.714l-.948-.57 4.651-4.651a1 1 0 0 1 1.642.353A9 9 0 0 1 8.814 21.42a1 1 0 0 1-.352-1.643Z" fill="currentColor"/>
    </svg>
  );
}
