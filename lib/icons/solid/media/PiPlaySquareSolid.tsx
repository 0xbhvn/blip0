import React from 'react';

/**
 * PiPlaySquareSolid icon from the solid style in media category.
 */
interface PiPlaySquareSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPlaySquareSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'play-square icon',
  ...props
}: PiPlaySquareSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M11.963 2h.074c1.366 0 2.443 0 3.314.06.888.06 1.634.186 2.328.473a7 7 0 0 1 3.788 3.788c.287.694.413 1.44.474 2.328.059.87.059 1.948.059 3.314v.074c0 1.366 0 2.443-.06 3.314-.06.888-.186 1.634-.473 2.328a7 7 0 0 1-3.788 3.788c-.694.287-1.44.413-2.328.474-.87.059-1.948.059-3.314.059h-.074c-1.366 0-2.443 0-3.314-.06-.888-.06-1.634-.186-2.328-.473a7 7 0 0 1-3.788-3.788c-.287-.694-.413-1.44-.474-2.328C2 14.481 2 13.403 2 12.037v-.074c0-1.366 0-2.443.06-3.314.06-.888.186-1.634.473-2.328A7 7 0 0 1 6.32 2.533c.694-.287 1.44-.413 2.328-.474C9.519 2 10.597 2 11.963 2Zm1.359 7.66.184.118c.513.33.913.587 1.206.815.295.23.51.453.626.726a1.75 1.75 0 0 1 0 1.362c-.115.273-.331.496-.626.726-.293.228-.693.485-1.206.815l-.184.119c-.593.38-1.052.676-1.426.87-.374.195-.7.31-1.02.287a1.75 1.75 0 0 1-1.277-.697c-.192-.257-.272-.594-.31-1.013-.039-.42-.039-.966-.039-1.67v-.236c0-.704 0-1.25.038-1.67.039-.42.119-.756.311-1.013a1.75 1.75 0 0 1 1.276-.697c.32-.023.647.092 1.021.287s.833.49 1.425.87Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
