import React from 'react';

/**
 * PiArrowDownSquareSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiArrowDownSquareSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowDownSquareSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-down-square icon',
  ...props
}: PiArrowDownSquareSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M12.037 22h-.074c-1.366 0-2.443 0-3.314-.06-.888-.06-1.634-.186-2.328-.473a7 7 0 0 1-3.788-3.788c-.287-.694-.413-1.44-.474-2.328C2 14.481 2 13.403 2 12.037v-.074c0-1.366 0-2.443.06-3.314.06-.888.186-1.634.473-2.328A7 7 0 0 1 6.32 2.533c.694-.287 1.44-.413 2.328-.474C9.519 2 10.597 2 11.963 2h.074c1.366 0 2.443 0 3.314.06.888.06 1.634.186 2.328.473a7 7 0 0 1 3.788 3.788c.287.694.413 1.44.474 2.328.059.87.059 1.948.059 3.314v.074c0 1.366 0 2.443-.06 3.314-.06.888-.186 1.634-.473 2.328a7 7 0 0 1-3.788 3.788c-.694.287-1.44.413-2.328.474-.87.059-1.948.059-3.314.059Zm3.154-10.537A19.4 19.4 0 0 1 13 13.986V8a1 1 0 1 0-2 0v5.986a19.4 19.4 0 0 1-2.192-2.523 1 1 0 0 0-1.616 1.177 21.3 21.3 0 0 0 3.78 3.994 1.63 1.63 0 0 0 2.055 0 21.3 21.3 0 0 0 3.781-3.994 1 1 0 0 0-1.617-1.177Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
