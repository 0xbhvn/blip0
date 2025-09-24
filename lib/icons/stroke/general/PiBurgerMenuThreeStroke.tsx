import React from 'react';

/**
 * PiBurgerMenuThreeStroke icon from the stroke style in general category.
 */
interface PiBurgerMenuThreeStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiBurgerMenuThreeStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'burger-menu-three icon',
  ...props
}: PiBurgerMenuThreeStrokeProps): React.ReactElement {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12h16M4 18h16M4 6h16" fill="none"/>
    </svg>
  );
}
