import React from 'react';

/**
 * PiTimerDefaultSolid icon from the solid style in time category.
 */
interface PiTimerDefaultSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTimerDefaultSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'timer-default icon',
  ...props
}: PiTimerDefaultSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M10 1a1 1 0 0 0 0 2h1v2.055A9.001 9.001 0 0 0 12 23a9 9 0 0 0 1-17.945V3h1a1 1 0 1 0 0-2zm5.359 10.806a1 1 0 0 0-1.414-1.415l-2.829 2.829a1 1 0 0 0 1.414 1.414z" clipRule="evenodd" fill="currentColor"/><path d="M18.66 4.615a1 1 0 0 1 1.413 0l1.061 1.06A1 1 0 0 1 19.72 7.09l-1.06-1.061a1 1 0 0 1 0-1.414Z" fill="currentColor"/>
    </svg>
  );
}
