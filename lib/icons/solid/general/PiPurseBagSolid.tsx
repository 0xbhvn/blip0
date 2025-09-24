import React from 'react';

/**
 * PiPurseBagSolid icon from the solid style in general category.
 */
interface PiPurseBagSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPurseBagSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'purse-bag icon',
  ...props
}: PiPurseBagSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M7.087 6.088C7.527 3.785 9.567 2 12 2c2.432 0 4.472 1.785 4.912 4.088.366.051.71.137 1.043.281a4.5 4.5 0 0 1 1.88 1.52c.3.421.487.883.64 1.407.147.504.28 1.126.443 1.885l.41 1.915c.276 1.285.497 2.314.6 3.15.107.854.108 1.618-.136 2.343a5 5 0 0 1-2.193 2.713c-.658.39-1.405.55-2.263.624-.839.074-1.891.074-3.205.074H9.869c-1.315 0-2.367 0-3.206-.074-.857-.075-1.604-.234-2.263-.624a5 5 0 0 1-2.193-2.713c-.243-.725-.242-1.489-.136-2.343.104-.836.324-1.865.6-3.15l.41-1.915c.163-.759.296-1.38.443-1.885.154-.524.34-.986.64-1.407a4.5 4.5 0 0 1 1.88-1.52c.334-.144.677-.23 1.043-.281ZM9.18 6h5.64c-.424-1.155-1.54-2-2.82-2-1.281 0-2.397.845-2.82 2Zm1.79 6.243a1 1 0 1 0-1.94-.486l-1 4a1 1 0 1 0 1.94.486zm4-.486a1 1 0 0 0-1.94.486l1 4a1 1 0 0 0 1.94-.485z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
