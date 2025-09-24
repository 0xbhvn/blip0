import React from 'react';

/**
 * PiCloudCheckSolid icon from the solid style in development category.
 */
interface PiCloudCheckSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCloudCheckSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'cloud-check icon',
  ...props
}: PiCloudCheckSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M5.117 10.176a7.502 7.502 0 0 1 14.348-1.461A6.5 6.5 0 0 1 16.5 21h-10a5.5 5.5 0 0 1-1.383-10.824Zm11.346 1.65a1 1 0 1 0-1.128-1.652 16 16 0 0 0-4.174 4.168L9.707 12.89a1 1 0 1 0-1.414 1.416l2.342 2.338a1 1 0 0 0 1.574-.21 14 14 0 0 1 4.254-4.607Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
