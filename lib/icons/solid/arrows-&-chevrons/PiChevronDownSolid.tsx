import React from 'react';

/**
 * PiChevronDownSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiChevronDownSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiChevronDownSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'chevron-down icon',
  ...props
}: PiChevronDownSolidProps): React.ReactElement {
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
      <path d="M12.925 14.673a21.4 21.4 0 0 0 3.88-4.08 1 1 0 0 0-.881-1.59 52 52 0 0 1-7.848 0 1 1 0 0 0-.881 1.59 21.4 21.4 0 0 0 3.88 4.08 1.47 1.47 0 0 0 1.85 0Z" fill="currentColor"/>
    </svg>
  );
}
