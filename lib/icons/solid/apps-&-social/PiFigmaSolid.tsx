import React from 'react';

/**
 * PiFigmaSolid icon from the solid style in apps-&-social category.
 */
interface PiFigmaSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFigmaSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'figma icon',
  ...props
}: PiFigmaSolidProps): React.ReactElement {
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
      <path d="M4.334 4.833A3.833 3.833 0 0 1 8.166 1h7.667a3.833 3.833 0 1 1 0 7.667H12v11.5a3.833 3.833 0 1 1-3.833-3.834 3.833 3.833 0 1 1 0-7.666 3.833 3.833 0 0 1-3.833-3.834Z" fill="currentColor"/><path d="M12 12.5a3.833 3.833 0 1 0 7.667 0 3.833 3.833 0 0 0-7.667 0Z" fill="currentColor"/>
    </svg>
  );
}
