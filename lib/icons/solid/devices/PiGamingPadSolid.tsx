import React from 'react';

/**
 * PiGamingPadSolid icon from the solid style in devices category.
 */
interface PiGamingPadSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGamingPadSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'gaming-pad icon',
  ...props
}: PiGamingPadSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M1 11.667A7.667 7.667 0 0 1 8.667 4h6.666A7.667 7.667 0 0 1 23 11.667v5.243a4.09 4.09 0 0 1-7.748 1.829l-.146-.292A2.62 2.62 0 0 0 12.764 17h-1.528c-.992 0-1.898.56-2.342 1.447l-.145.292A4.09 4.09 0 0 1 1 16.909zM15.982 9.19a1 1 0 0 0-1.964-.382v.001a1 1 0 0 0 1.963.382zM9 9a1 1 0 1 0-2 0v1H6a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2H9zm9.982 3.19a1 1 0 0 0-1.963-.38h0a1 1 0 0 0 1.963.382z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
