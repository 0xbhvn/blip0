import React from 'react';

/**
 * PiChevronSortHorizontalSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiChevronSortHorizontalSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiChevronSortHorizontalSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'chevron-sort-horizontal icon',
  ...props
}: PiChevronSortHorizontalSolidProps): React.ReactElement {
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
      <path d="M4.327 11.075a1.47 1.47 0 0 0 0 1.85 21.4 21.4 0 0 0 4.08 3.88 1 1 0 0 0 1.59-.88 52.5 52.5 0 0 1 0-7.85 1 1 0 0 0-1.59-.88 21.4 21.4 0 0 0-4.08 3.88Z" fill="currentColor"/><path d="M14.003 15.925a1 1 0 0 0 1.59.88 21.4 21.4 0 0 0 4.08-3.88 1.47 1.47 0 0 0 0-1.85 21.4 21.4 0 0 0-4.08-3.88 1 1 0 0 0-1.59.88 52.5 52.5 0 0 1 0 7.85Z" fill="currentColor"/>
    </svg>
  );
}
