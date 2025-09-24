import React from 'react';

/**
 * PiStoreAltStroke icon from the stroke style in building category.
 */
interface PiStoreAltStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiStoreAltStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'store-alt icon',
  ...props
}: PiStoreAltStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 21v-7.258m0 0a3.15 3.15 0 0 1-1.488.36 3.256 3.256 0 0 1-3.255-3.255A3.25 3.25 0 0 1 14 13.417m6 .325c1.145-.605 1.82-1.896 1.75-3.275l-.315-3.145C21.118 4.15 20.03 3 16.659 3h-9.32C3.97 3 2.882 4.15 2.565 7.322l-.315 3.145c-.061 1.379.608 2.67 1.751 3.275m0 0c.433.23.934.36 1.489.36a3.256 3.256 0 0 0 3.256-3.255A3.256 3.256 0 0 0 14 13.417m-10 .325V18.6c0 .84 0 1.26.163 1.581a1.5 1.5 0 0 0 .656.656c.32.163.74.163 1.581.163h5.2c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .656-.656c.163-.32.163-.74.163-1.581v-5.183" fill="none"/>
    </svg>
  );
}
