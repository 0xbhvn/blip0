import React from 'react';

/**
 * PiChevronBigLeftSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiChevronBigLeftSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiChevronBigLeftSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'chevron-big-left icon',
  ...props
}: PiChevronBigLeftSolidProps): React.ReactElement {
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
      <path d="M14.414 5.19a1 1 0 0 1 1.582.893 71 71 0 0 0 0 11.834 1 1 0 0 1-1.582.893 31.6 31.6 0 0 1-6.007-5.669 1.8 1.8 0 0 1 0-2.282 31.6 31.6 0 0 1 6.007-5.67Z" fill="currentColor"/>
    </svg>
  );
}
