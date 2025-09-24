import React from 'react';

/**
 * PiCloudWindSolid icon from the solid style in weather category.
 */
interface PiCloudWindSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCloudWindSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'cloud-wind icon',
  ...props
}: PiCloudWindSolidProps): React.ReactElement {
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
      <path d="M12.5 2a7.5 7.5 0 0 1 6.965 4.715A6.5 6.5 0 0 1 16.5 19h-1.6a5 5 0 0 0-.967-2.087 5.001 5.001 0 1 0-3.435-9.242A3 3 0 0 0 9.09 11H2q-.212 0-.415.028a5.5 5.5 0 0 1 3.531-2.852A7.5 7.5 0 0 1 7.434 3.97 7.47 7.47 0 0 1 12.5 2Z" fill="currentColor"/><path d="M12.5 11.133A1 1 0 1 1 13 13H2a1 1 0 1 0 0 2h11a3 3 0 1 0-1.5-5.598 1 1 0 1 0 1 1.731Z" fill="currentColor"/><path d="M2 17a1 1 0 1 0 0 2h8a1 1 0 1 1-.5 1.867 1 1 0 0 0-1 1.731A3 3 0 1 0 10 17z" fill="currentColor"/>
    </svg>
  );
}
