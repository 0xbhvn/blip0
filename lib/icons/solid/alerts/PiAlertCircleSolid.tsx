import React from 'react';

/**
 * PiAlertCircleSolid icon from the solid style in alerts category.
 */
interface PiAlertCircleSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAlertCircleSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'alert-circle icon',
  ...props
}: PiAlertCircleSolidProps): React.ReactElement {
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
      <path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11 4za1 1 0 1 0-2 0v0a1 1 0 1 0 2 0Zm0-3.376v-4a1 1 0 1 0-2 0v4a1 1 0 0 0 2 0Z" fill="currentColor"/>
    </svg>
  );
}
