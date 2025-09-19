import React from 'react';

/**
 * PiForkKnifeStroke icon from the stroke style in food category.
 */
interface PiForkKnifeStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiForkKnifeStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'fork-knife icon',
  ...props
}: PiForkKnifeStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.003 3 4.55 6.624a3.48 3.48 0 0 0 3.453 3.912m3-7.536.454 3.624a3.48 3.48 0 0 1-3.454 3.912m0 0V21m0-10.464V3m11 18v-4.926m0 0V3.83a.829.829 0 0 0-1.288-.69 4.15 4.15 0 0 0-1.83 3.106l-.492 5.9c-.052.621-.078.932-.055 1.19a3 3 0 0 0 2.476 2.693c.255.044.566.044 1.19.044Z" fill="none"/>
    </svg>
  );
}
