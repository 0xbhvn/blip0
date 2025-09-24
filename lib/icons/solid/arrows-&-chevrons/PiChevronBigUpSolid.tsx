import React from 'react';

/**
 * PiChevronBigUpSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiChevronBigUpSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiChevronBigUpSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'chevron-big-up icon',
  ...props
}: PiChevronBigUpSolidProps): JSX.Element {
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
      <path d="M5.19 14.414a1 1 0 0 0 .893 1.582 71 71 0 0 1 11.834 0 1 1 0 0 0 .893-1.582 31.6 31.6 0 0 0-5.669-6.007 1.8 1.8 0 0 0-2.282 0 31.6 31.6 0 0 0-5.67 6.007Z" fill="currentColor"/>
    </svg>
  );
}
