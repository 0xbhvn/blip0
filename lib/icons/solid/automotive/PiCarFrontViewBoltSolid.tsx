import React from 'react';

/**
 * PiCarFrontViewBoltSolid icon from the solid style in automotive category.
 */
interface PiCarFrontViewBoltSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCarFrontViewBoltSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'car-front-view-bolt icon',
  ...props
}: PiCarFrontViewBoltSolidProps): JSX.Element {
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
      <g clipPath="url(#a)"><path fillRule="evenodd" d="M8.136 4h7.728c.795 0 1.395 0 1.956.167a4 4 0 0 1 1.36.712c.457.367.799.86 1.25 1.514l1.583 2.285c.147.213.275.398.386.575l.432-.072a1 1 0 0 1 .338 1.971l-.177.03c.008.199.008.413.008.657V19a3 3 0 0 1-6 0l-2.907.006c-2.362.005-4.729.01-7.093-.002A3 3 0 0 1 1 19v-7.16c0-.245 0-.46.008-.658l-.177-.03a1 1 0 0 1 .338-1.971l.433.072c.11-.177.238-.362.386-.575L3.57 6.393c.452-.654.793-1.147 1.25-1.514a4 4 0 0 1 1.36-.712C6.742 3.999 7.34 4 8.136 4Zm4.715 4.524a1 1 0 1 0-1.703-1.048l-2.154 3.5a1 1 0 0 0 .852 1.524h2.518l-1.216 1.976a1 1 0 1 0 1.703 1.048l2.154-3.5a1 1 0 0 0-.852-1.524h-2.518z" clipRule="evenodd" fill="currentColor"/></g><defs><clipPath id="a"><path d="M0 0h24v24H0z" fill="currentColor"/></clipPath></defs>
    </svg>
  );
}
