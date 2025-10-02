import React from 'react';

/**
 * PiArrowLeftSquareSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiArrowLeftSquareSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowLeftSquareSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-left-square icon',
  ...props
}: PiArrowLeftSquareSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M2 11.963v.074c0 1.366 0 2.443.06 3.314.06.888.186 1.634.473 2.328a7 7 0 0 0 3.788 3.788c.694.287 1.44.413 2.328.474.87.059 1.948.059 3.314.059h.074c1.366 0 2.443 0 3.314-.06.888-.06 1.634-.186 2.328-.473a7 7 0 0 0 3.788-3.788c.287-.694.413-1.44.474-2.328.059-.87.059-1.948.059-3.314v-.074c0-1.366 0-2.443-.06-3.314-.06-.888-.186-1.634-.473-2.328a7 7 0 0 0-3.788-3.788c-.694-.287-1.44-.413-2.328-.474C14.481 2 13.403 2 12.037 2h-.074c-1.366 0-2.443 0-3.314.06-.888.06-1.634.186-2.328.473A7 7 0 0 0 2.533 6.32c-.287.694-.413 1.44-.474 2.328C2 9.519 2 10.597 2 11.963Zm10.537-3.155c-.906.66-1.75 1.393-2.523 2.192H16a1 1 0 1 1 0 2h-5.986a19.4 19.4 0 0 0 2.523 2.191 1 1 0 0 1-1.177 1.617 21.3 21.3 0 0 1-3.994-3.78 1.63 1.63 0 0 1 0-2.055 21.3 21.3 0 0 1 3.994-3.781 1 1 0 0 1 1.177 1.616Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
