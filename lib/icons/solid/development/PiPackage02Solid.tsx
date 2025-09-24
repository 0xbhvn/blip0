import React from 'react';

/**
 * PiPackage02Solid icon from the solid style in development category.
 */
interface PiPackage02SolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPackage02Solid({
  size = 24,
  color,
  className,
  ariaLabel = 'package-02 icon',
  ...props
}: PiPackage02SolidProps): JSX.Element {
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
      <path d="m6.352 4.02-1.47.814c-.784.433-1.37.757-1.81 1.226l-.032.035L12 10.867l3.17-1.688z" fill="currentColor"/><path d="M2.107 7.864C1.999 8.376 2 8.94 2 9.635v4.73c0 .864-.001 1.525.206 2.135.181.536.477 1.026.866 1.44.44.469 1.026.793 1.81 1.226l4.262 2.359c.726.402 1.277.707 1.856.855V12.6z" fill="currentColor"/><path d="M13 22.38c.579-.148 1.13-.453 1.856-.855l4.261-2.359c.785-.433 1.371-.757 1.811-1.226a4 4 0 0 0 .867-1.44c.206-.61.206-1.27.205-2.135v-4.73c0-.695.001-1.26-.107-1.771L18.22 9.82v3.003a1 1 0 1 1-2 0v-1.937L13 12.6z" fill="currentColor"/><path d="m20.96 6.095-.032-.035c-.44-.469-1.026-.793-1.81-1.226l-4.262-2.359c-.79-.437-1.372-.76-2.008-.89a4.25 4.25 0 0 0-1.696 0c-.636.13-1.219.453-2.008.89l-.757.42 8.856 5.18z" fill="currentColor"/>
    </svg>
  );
}
