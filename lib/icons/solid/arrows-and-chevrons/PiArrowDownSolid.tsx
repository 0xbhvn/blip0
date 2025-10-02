import React from 'react';

/**
 * PiArrowDownSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiArrowDownSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowDownSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-down icon',
  ...props
}: PiArrowDownSolidProps): React.ReactElement {
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
      <path d="m17.95 13.17-4.95.25V4a1 1 0 1 0-2 0v9.419l-4.95-.248a1 1 0 0 0-.854 1.593 31.2 31.2 0 0 0 5.585 5.807 1.95 1.95 0 0 0 2.438 0 31.2 31.2 0 0 0 5.585-5.807 1 1 0 0 0-.854-1.593Z" fill="currentColor"/>
    </svg>
  );
}
