import React from 'react';

/**
 * PiThreeDotsMenuHorizontalSquareSolid icon from the solid style in general category.
 */
interface PiThreeDotsMenuHorizontalSquareSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiThreeDotsMenuHorizontalSquareSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'three-dots-menu-horizontal-square icon',
  ...props
}: PiThreeDotsMenuHorizontalSquareSolidProps): React.ReactElement {
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
      <path d="M22 11.963v.074c0 1.366 0 2.443-.06 3.314-.06.888-.186 1.634-.473 2.328a7 7 0 0 1-3.788 3.788c-.694.287-1.44.413-2.328.474-.87.059-1.948.059-3.314.059h-.074c-1.366 0-2.443 0-3.314-.06-.888-.06-1.634-.186-2.328-.473a7 7 0 0 1-3.788-3.788c-.287-.694-.413-1.44-.474-2.328C2 14.481 2 13.403 2 12.037v-.074c0-1.366 0-2.443.06-3.314.06-.888.186-1.634.473-2.328A7 7 0 0 1 6.32 2.533c.694-.287 1.44-.413 2.328-.474C9.519 2 10.597 2 11.963 2h.074c1.366 0 2.443 0 3.314.06.888.06 1.634.186 2.328.473a7 7 0 0 1 3.788 3.788c.287.694.413 1.44.474 2.328.059.87.059 1.948.059 3.314Zm-5.996 1.092a1.05 1.05 0 1 0 0-2.1h-.01a1.05 1.05 0 1 0 0 2.1zm-4 0a1.05 1.05 0 1 0 0-2.1h-.01a1.05 1.05 0 1 0 0 2.1zm-4 0a1.05 1.05 0 0 0 0-2.1h-.01a1.05 1.05 0 1 0 0 2.1z" fill="currentColor"/>
    </svg>
  );
}
