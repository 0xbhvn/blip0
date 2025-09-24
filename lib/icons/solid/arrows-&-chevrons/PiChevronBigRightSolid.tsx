import React from 'react';

/**
 * PiChevronBigRightSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiChevronBigRightSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiChevronBigRightSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'chevron-big-right icon',
  ...props
}: PiChevronBigRightSolidProps): JSX.Element {
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
      <path d="M9.586 5.19a1 1 0 0 0-1.583.893 71 71 0 0 1 0 11.834 1 1 0 0 0 1.583.893 31.6 31.6 0 0 0 6.007-5.669 1.8 1.8 0 0 0 0-2.282 31.6 31.6 0 0 0-6.007-5.67Z" fill="currentColor"/>
    </svg>
  );
}
