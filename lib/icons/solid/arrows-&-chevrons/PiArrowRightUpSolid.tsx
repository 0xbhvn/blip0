import React from 'react';

/**
 * PiArrowRightUpSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiArrowRightUpSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowRightUpSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-right-up icon',
  ...props
}: PiArrowRightUpSolidProps): React.ReactElement {
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
      <path d="m17.515 14.9-3.325-3.676-8.074 8.074a1 1 0 0 1-1.414-1.414l8.074-8.074-3.675-3.325a1 1 0 0 1 .522-1.73 31.2 31.2 0 0 1 8.055-.158 1.95 1.95 0 0 1 1.725 1.725 31.2 31.2 0 0 1-.157 8.054 1 1 0 0 1-1.73.523Z" fill="currentColor"/>
    </svg>
  );
}
