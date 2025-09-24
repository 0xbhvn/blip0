import React from 'react';

/**
 * PiArrowUpSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiArrowUpSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowUpSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-up icon',
  ...props
}: PiArrowUpSolidProps): React.ReactElement {
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
      <path d="M17.95 10.83 13 10.58V20a1 1 0 1 1-2 0v-9.419l-4.95.248a1 1 0 0 1-.854-1.593 31.2 31.2 0 0 1 5.585-5.807 1.95 1.95 0 0 1 2.438 0 31.2 31.2 0 0 1 5.585 5.807 1 1 0 0 1-.854 1.593Z" fill="currentColor"/>
    </svg>
  );
}
