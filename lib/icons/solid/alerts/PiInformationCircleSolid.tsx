import React from 'react';

/**
 * PiInformationCircleSolid icon from the solid style in alerts category.
 */
interface PiInformationCircleSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiInformationCircleSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'information-circle icon',
  ...props
}: PiInformationCircleSolidProps): JSX.Element {
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
      <path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-3.376a1 1 0 1 0-2 0v.001a1 1 0 1 0 2 0zM13 12a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0z" fill="currentColor"/>
    </svg>
  );
}
