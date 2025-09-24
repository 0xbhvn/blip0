import React from 'react';

/**
 * PiTimerCheckSolid icon from the solid style in time category.
 */
interface PiTimerCheckSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTimerCheckSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'timer-check icon',
  ...props
}: PiTimerCheckSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M9 2a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-1v2.055A9.001 9.001 0 0 1 12 23a9 9 0 0 1-1-17.945V3h-1a1 1 0 0 1-1-1Zm6.84 9.436a1 1 0 0 1-.262 1.39 12.1 12.1 0 0 0-3.698 3.97 1 1 0 0 1-.872.504 1 1 0 0 1-.71-.293l-2.012-2.009a1 1 0 0 1 .71-1.707 1 1 0 0 1 .71.292l1.128 1.126a14.2 14.2 0 0 1 3.61-3.535A1 1 0 0 1 15.01 11a1 1 0 0 1 .83.436Z" clipRule="evenodd" fill="currentColor"/><path d="M18.66 4.615a1 1 0 0 1 1.413 0l1.061 1.06A1 1 0 0 1 19.72 7.09l-1.06-1.061a1 1 0 0 1 0-1.414Z" fill="currentColor"/>
    </svg>
  );
}
