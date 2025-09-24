import React from 'react';

/**
 * PiBottleSoapSolid icon from the solid style in medical category.
 */
interface PiBottleSoapSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiBottleSoapSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'bottle-soap icon',
  ...props
}: PiBottleSoapSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M16.419 1c1.289 0 2.442.773 2.94 1.944l.09.24.028.098a1 1 0 0 1-1.888.63l-.037-.096-.034-.09a1.19 1.19 0 0 0-1.1-.726H13v1h1l.204.01A2 2 0 0 1 16 6v1.126c1.725.444 3 2.01 3 3.874v9.5c0 .125-.013.247-.03.366q-.007.06-.019.121l-.02.087a3 3 0 0 1-.04.152l-.03.09q-.022.064-.047.126-.02.049-.043.096l-.06.125-.047.083a3 3 0 0 1-.21.31 3 3 0 0 1-.155.176l-.059.06a3 3 0 0 1-.12.108l-.056.047a3 3 0 0 1-.32.218l-.074.043a3 3 0 0 1-.14.067l-.075.035-.14.051q-.044.017-.088.03-.072.022-.148.039l-.083.02a3 3 0 0 1-.24.037L16.5 23h-9q-.123 0-.243-.013-.063-.007-.124-.017-.06-.007-.121-.019l-.087-.02q-.077-.017-.152-.04l-.09-.03q-.064-.022-.126-.047-.049-.02-.096-.043l-.125-.06-.083-.047a2.6 2.6 0 0 1-.379-.268l-.107-.097-.06-.059a3 3 0 0 1-.108-.12l-.047-.056a2.5 2.5 0 0 1-.218-.32l-.043-.074a3 3 0 0 1-.067-.14l-.035-.075-.051-.14-.03-.088q-.022-.072-.039-.148l-.02-.087a3 3 0 0 1-.036-.236L5 20.5V11a4 4 0 0 1 3-3.874V6a2 2 0 0 1 2-2h1V3H9.5a1 1 0 0 1 0-2zM9 9a2 2 0 0 0-2 2v2.167c.986-.208 1.847-.211 2.637-.067 1.101.2 1.987.678 2.746 1.088.784.425 1.442.785 2.248.974.63.148 1.385.193 2.369.015V11a2 2 0 0 0-2-2z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
