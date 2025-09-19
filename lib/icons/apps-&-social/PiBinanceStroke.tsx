import React from 'react';

/**
 * PiBinanceStroke icon from the stroke style in apps-&-social category.
 */
interface PiBinanceStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiBinanceStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'binance icon',
  ...props
}: PiBinanceStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m3.411 13.718-.34-.341a1.947 1.947 0 0 1 0-2.754l.34-.34m17.178 0 .34.34c.761.76.761 1.993 0 2.754l-.34.34m-3.436 3.436-3.533 3.534a2.29 2.29 0 0 1-3.24 0l-3.533-3.534M17.153 6.847 13.62 3.313a2.29 2.29 0 0 0-3.24 0L6.848 6.847m5.962 7.777 1.815-1.814a1.145 1.145 0 0 0 0-1.62L12.81 9.376a1.145 1.145 0 0 0-1.62 0L9.374 11.19a1.145 1.145 0 0 0 0 1.62l1.815 1.815a1.145 1.145 0 0 0 1.62 0Z" fill="none"/>
    </svg>
  );
}
