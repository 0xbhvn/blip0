import React from 'react';

/**
 * PiMinimizeFourLineArrowSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiMinimizeFourLineArrowSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMinimizeFourLineArrowSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'minimize-four-line-arrow icon',
  ...props
}: PiMinimizeFourLineArrowSolidProps): JSX.Element {
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
      <path d="M3.707 2.293a1 1 0 0 0-1.414 1.414L5.095 6.51q-.386.354-.788.69l-.948.793a1 1 0 0 0 .476 1.754c1.566.262 3.15.322 4.713.177a1.52 1.52 0 0 0 1.375-1.375 18.3 18.3 0 0 0-.177-4.713 1 1 0 0 0-1.754-.476l-.793.948q-.336.402-.69.788z" fill="currentColor"/><path d="M21.707 3.707a1 1 0 0 0-1.414-1.414L17.49 5.095q-.354-.386-.69-.788l-.793-.948a1 1 0 0 0-1.754.476 18.3 18.3 0 0 0-.177 4.713 1.52 1.52 0 0 0 1.375 1.375c1.563.145 3.147.085 4.713-.177a1 1 0 0 0 .476-1.754l-.948-.793q-.402-.336-.788-.69z" fill="currentColor"/><path d="M5.095 17.49q-.386-.352-.788-.69l-.948-.792a1 1 0 0 1 .476-1.754 18.3 18.3 0 0 1 4.713-.177 1.52 1.52 0 0 1 1.375 1.375 18.3 18.3 0 0 1-.177 4.713 1 1 0 0 1-1.754.476l-.793-.948q-.336-.402-.69-.788l-2.802 2.802a1 1 0 0 1-1.414-1.414z" fill="currentColor"/><path d="M14.515 14.515a1.52 1.52 0 0 1 .937-.438 18.3 18.3 0 0 1 4.713.177 1 1 0 0 1 .476 1.754l-.948.793q-.402.336-.788.69l2.802 2.802a1 1 0 0 1-1.414 1.414l-2.802-2.802q-.354.386-.69.788l-.793.948a1 1 0 0 1-1.754-.476 18.3 18.3 0 0 1-.177-4.713c.033-.36.19-.69.438-.937Z" fill="currentColor"/>
    </svg>
  );
}
