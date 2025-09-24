import React from 'react';

/**
 * PiCheckTickSquareBrokenSolid icon from the solid style in general category.
 */
interface PiCheckTickSquareBrokenSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCheckTickSquareBrokenSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'check-tick-square-broken icon',
  ...props
}: PiCheckTickSquareBrokenSolidProps): JSX.Element {
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
      <path d="M11.963 2c-1.366 0-2.443 0-3.314.06-.888.06-1.634.186-2.328.473A7 7 0 0 0 2.533 6.32c-.287.694-.413 1.44-.474 2.328C2 9.519 2 10.597 2 11.963v.074c0 1.366 0 2.443.06 3.314.06.888.186 1.634.473 2.328a7 7 0 0 0 3.788 3.788c.694.287 1.44.413 2.328.474.87.059 1.948.059 3.314.059h.074c1.366 0 2.443 0 3.314-.06.888-.06 1.634-.186 2.328-.473a7 7 0 0 0 3.788-3.788c.287-.694.413-1.44.474-2.328.059-.87.059-1.948.059-3.314v-.074c0-1.366 0-2.443-.06-3.314-.06-.888-.186-1.634-.473-2.328V6.32l.132-.09a1 1 0 0 0-1.128-1.651l-.03.02a7 7 0 0 1 1.025 1.721l-.66.451a24.64 24.64 0 0 0-7.494 8.118l-.36.628a1 1 0 0 1-1.624.158l-3.475-4.02a1 1 0 0 1 1.513-1.308l2.557 2.958a26.6 26.6 0 0 1 7.755-8.185l.764-.522a7 7 0 0 0-2.763-2.064c-.694-.287-1.44-.413-2.328-.474C14.481 2 13.403 2 12.037 2z" fill="currentColor"/>
    </svg>
  );
}
