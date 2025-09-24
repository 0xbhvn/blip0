import React from 'react';

/**
 * PiDoubleChevronRightSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiDoubleChevronRightSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiDoubleChevronRightSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'double-chevron-right icon',
  ...props
}: PiDoubleChevronRightSolidProps): React.ReactElement {
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
      <path d="M6.003 8.075a1 1 0 0 1 1.585-.884 21.4 21.4 0 0 1 4.085 3.884 1.47 1.47 0 0 1 0 1.85 21.4 21.4 0 0 1-4.085 3.884 1 1 0 0 1-1.585-.884l.165-2.205a23 23 0 0 0 0-3.44z" fill="currentColor"/><path d="M12.003 8.075a1 1 0 0 1 1.585-.884 21.4 21.4 0 0 1 4.085 3.884 1.47 1.47 0 0 1 0 1.85 21.4 21.4 0 0 1-4.085 3.884 1 1 0 0 1-1.585-.884l.165-2.205a23 23 0 0 0 0-3.44z" fill="currentColor"/>
    </svg>
  );
}
