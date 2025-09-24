import React from 'react';

/**
 * PiChevronSortVerticalSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiChevronSortVerticalSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiChevronSortVerticalSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'chevron-sort-vertical icon',
  ...props
}: PiChevronSortVerticalSolidProps): React.ReactElement {
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
      <path d="M12.925 4.327a1.47 1.47 0 0 0-1.85 0 21.4 21.4 0 0 0-3.88 4.08 1 1 0 0 0 .88 1.59 52.5 52.5 0 0 1 7.85 0 1 1 0 0 0 .88-1.59 21.4 21.4 0 0 0-3.88-4.08Z" fill="currentColor"/><path d="M8.075 14.003a1 1 0 0 0-.88 1.59 21.4 21.4 0 0 0 3.88 4.08 1.47 1.47 0 0 0 1.85 0 21.4 21.4 0 0 0 3.88-4.08 1 1 0 0 0-.88-1.59 52.5 52.5 0 0 1-7.85 0Z" fill="currentColor"/>
    </svg>
  );
}
