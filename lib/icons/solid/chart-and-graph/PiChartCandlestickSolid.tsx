import React from 'react';

/**
 * PiChartCandlestickSolid icon from the solid style in chart-&-graph category.
 */
interface PiChartCandlestickSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiChartCandlestickSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'chart-candlestick icon',
  ...props
}: PiChartCandlestickSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M12 2a1 1 0 0 1 1 1v2.05a2.5 2.5 0 0 1 2 2.45v9a2.5 2.5 0 0 1-2 2.45V21a1 1 0 1 1-2 0v-2.05a2.5 2.5 0 0 1-2-2.45v-9a2.5 2.5 0 0 1 2-2.45V3a1 1 0 0 1 1-1Zm7 1a1 1 0 0 1 1 1v2.05a2.5 2.5 0 0 1 2 2.45v4a2.5 2.5 0 0 1-2 2.45V17a1 1 0 1 1-2 0v-2.05a2.5 2.5 0 0 1-2-2.45v-4a2.5 2.5 0 0 1 2-2.45V4a1 1 0 0 1 1-1ZM5 6a1 1 0 0 1 1 1v2.05a2.5 2.5 0 0 1 2 2.45v4a2.5 2.5 0 0 1-2 2.45V20a1 1 0 1 1-2 0v-2.05a2.5 2.5 0 0 1-2-2.45v-4a2.5 2.5 0 0 1 2-2.45V7a1 1 0 0 1 1-1Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
