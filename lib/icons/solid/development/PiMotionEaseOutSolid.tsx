import React from 'react';

/**
 * PiMotionEaseOutSolid icon from the solid style in development category.
 */
interface PiMotionEaseOutSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMotionEaseOutSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'motion-ease-out icon',
  ...props
}: PiMotionEaseOutSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M11.963 2h.074c1.366 0 2.443 0 3.314.06.888.06 1.634.186 2.328.473a7 7 0 0 1 3.788 3.788c.287.694.413 1.44.474 2.328.059.87.059 1.948.059 3.314v.074c0 1.366 0 2.443-.06 3.314-.06.888-.186 1.634-.473 2.328a7 7 0 0 1-3.788 3.788c-.694.287-1.44.413-2.328.474-.87.059-1.948.059-3.314.059h-.074c-1.366 0-2.443 0-3.314-.06-.888-.06-1.634-.186-2.328-.473a7 7 0 0 1-3.788-3.788c-.287-.694-.413-1.44-.474-2.328C2 14.481 2 13.403 2 12.037v-.074c0-1.366 0-2.443.06-3.314.06-.888.186-1.634.473-2.328A7 7 0 0 1 6.32 2.533c.694-.287 1.44-.413 2.328-.474C9.519 2 10.597 2 11.963 2ZM17 6c-4.023 0-6.785 2.872-8.463 5.455a22.8 22.8 0 0 0-2.453 5.125l-.03.094-.008.027-.003.007v.003s0 .002.957.289l-.958-.287a1 1 0 0 0 1.916.575v-.003l.006-.017q.056-.185.122-.367c.09-.258.228-.63.415-1.079.375-.9.942-2.092 1.712-3.277C11.785 10.128 14.023 8 17 8a1 1 0 1 0 0-2Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
