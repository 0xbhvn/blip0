import React from 'react';

/**
 * PiArrowRightSquareSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiArrowRightSquareSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowRightSquareSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-right-square icon',
  ...props
}: PiArrowRightSquareSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M22 11.963v.074c0 1.366 0 2.443-.06 3.314-.06.888-.186 1.634-.473 2.328a7 7 0 0 1-3.788 3.788c-.694.287-1.44.413-2.328.474-.87.059-1.948.059-3.314.059h-.074c-1.366 0-2.443 0-3.314-.06-.888-.06-1.634-.186-2.328-.473a7 7 0 0 1-3.788-3.788c-.287-.694-.413-1.44-.474-2.328C2 14.481 2 13.403 2 12.037v-.074c0-1.366 0-2.443.06-3.314.06-.888.186-1.634.473-2.328A7 7 0 0 1 6.32 2.533c.694-.287 1.44-.413 2.328-.474C9.519 2 10.597 2 11.963 2h.074c1.366 0 2.443 0 3.314.06.888.06 1.634.186 2.328.473a7 7 0 0 1 3.788 3.788c.287.694.413 1.44.474 2.328.059.87.059 1.948.059 3.314ZM11.463 8.808c.906.66 1.75 1.393 2.523 2.192H8a1 1 0 1 0 0 2h5.986a19.4 19.4 0 0 1-2.523 2.191 1 1 0 0 0 1.177 1.617 21.3 21.3 0 0 0 3.994-3.78 1.63 1.63 0 0 0 0-2.055 21.3 21.3 0 0 0-3.994-3.781 1 1 0 0 0-1.177 1.616Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
