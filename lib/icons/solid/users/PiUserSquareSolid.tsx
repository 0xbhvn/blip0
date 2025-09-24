import React from 'react';

/**
 * PiUserSquareSolid icon from the solid style in users category.
 */
interface PiUserSquareSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiUserSquareSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'user-square icon',
  ...props
}: PiUserSquareSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M10.956 2h2.088c1.363 0 2.447 0 3.321.071.896.074 1.66.227 2.359.583a6 6 0 0 1 2.622 2.622c.356.7.51 1.463.583 2.359.071.874.071 1.958.071 3.321v2.088c0 1.363 0 2.447-.071 3.321-.074.896-.227 1.66-.583 2.359a6 6 0 0 1-2.622 2.622c-.7.356-1.463.51-2.359.583-.874.071-1.958.071-3.321.071h-2.088c-1.363 0-2.447 0-3.321-.071-.896-.074-1.66-.227-2.359-.583a6 6 0 0 1-2.622-2.622c-.356-.7-.51-1.463-.583-2.359C2 15.491 2 14.407 2 13.044v-2.088c0-1.363 0-2.447.071-3.321.074-.896.227-1.66.583-2.359a6 6 0 0 1 2.622-2.622c.7-.356 1.463-.51 2.359-.583C8.509 2 9.593 2 10.956 2ZM12 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm3.617 9c1.807 0 3.357 1.1 4.017 2.666a4 4 0 0 1-1.818 1.898c-.37.189-.842.308-1.613.371C15.418 20 14.417 20 13 20h-2c-1.417 0-2.419 0-3.203-.065-.772-.063-1.243-.182-1.613-.371a4 4 0 0 1-1.818-1.897A4.36 4.36 0 0 1 8.383 15z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
