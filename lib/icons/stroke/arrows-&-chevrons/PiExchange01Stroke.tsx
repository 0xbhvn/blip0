import React from 'react';

/**
 * PiExchange01Stroke icon from the stroke style in arrows-&-chevrons category.
 */
interface PiExchange01StrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiExchange01Stroke({
  size = 24,
  color,
  className,
  ariaLabel = 'exchange-01 icon',
  ...props
}: PiExchange01StrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 17.352a14.7 14.7 0 0 1-2.426 2.447A.92.92 0 0 1 18 20m-3-2.648c.706.905 1.52 1.726 2.426 2.447A.92.92 0 0 0 18 20m0 0V7a3 3 0 1 0-6 0v10a3 3 0 1 1-6 0V4M3 6.648a14.7 14.7 0 0 1 2.426-2.447A.92.92 0 0 1 6 4m3 2.648a14.7 14.7 0 0 0-2.426-2.447A.92.92 0 0 0 6 4" fill="none"/>
    </svg>
  );
}
