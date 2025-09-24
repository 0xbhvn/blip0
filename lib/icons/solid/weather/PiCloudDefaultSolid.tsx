import React from 'react';

/**
 * PiCloudDefaultSolid icon from the solid style in weather category.
 */
interface PiCloudDefaultSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCloudDefaultSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'cloud-default icon',
  ...props
}: PiCloudDefaultSolidProps): React.ReactElement {
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
      <path d="M12.5 4a7.5 7.5 0 0 1 6.965 4.715A6.5 6.5 0 0 1 16.5 21h-10a5.5 5.5 0 0 1-1.383-10.824A7.5 7.5 0 0 1 7.434 5.97 7.47 7.47 0 0 1 12.5 4Z" fill="currentColor"/>
    </svg>
  );
}
