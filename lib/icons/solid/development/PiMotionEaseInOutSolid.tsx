import React from 'react';

/**
 * PiMotionEaseInOutSolid icon from the solid style in development category.
 */
interface PiMotionEaseInOutSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMotionEaseInOutSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'motion-ease-in-out icon',
  ...props
}: PiMotionEaseInOutSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M11.963 2h.074c1.366 0 2.443 0 3.314.06.888.06 1.634.186 2.328.473a7 7 0 0 1 3.788 3.788c.287.694.413 1.44.474 2.328.059.87.059 1.948.059 3.314v.074c0 1.366 0 2.443-.06 3.314-.06.888-.186 1.634-.473 2.328a7 7 0 0 1-3.788 3.788c-.694.287-1.44.413-2.328.474-.87.059-1.948.059-3.314.059h-.074c-1.366 0-2.443 0-3.314-.06-.888-.06-1.634-.186-2.328-.473a7 7 0 0 1-3.788-3.788c-.287-.694-.413-1.44-.474-2.328C2 14.481 2 13.403 2 12.037v-.074c0-1.366 0-2.443.06-3.314.06-.888.186-1.634.473-2.328A7 7 0 0 1 6.32 2.533c.694-.287 1.44-.413 2.328-.474C9.519 2 10.597 2 11.963 2ZM17 6c-2.04 0-3.404.754-4.325 1.954-.831 1.085-1.251 2.485-1.607 3.672l-.026.087c-.388 1.295-.719 2.352-1.304 3.116C9.22 15.504 8.46 16 7 16a1 1 0 0 0 0 2c2.04 0 3.404-.753 4.325-1.954.831-1.085 1.251-2.485 1.607-3.672l.026-.087c.388-1.295.719-2.352 1.304-3.116C14.78 8.496 15.54 8 17 8a1 1 0 1 0 0-2Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
