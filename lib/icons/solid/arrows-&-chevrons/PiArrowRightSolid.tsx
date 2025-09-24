import React from 'react';

/**
 * PiArrowRightSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiArrowRightSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowRightSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-right icon',
  ...props
}: PiArrowRightSolidProps): React.ReactElement {
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
      <path d="m14.17 6.05.25 4.95H3a1 1 0 1 0 0 2h11.419l-.248 4.95a1 1 0 0 0 1.593.854 31.2 31.2 0 0 0 5.807-5.584 1.95 1.95 0 0 0 0-2.44 31.2 31.2 0 0 0-5.807-5.584 1 1 0 0 0-1.593.854Z" fill="currentColor"/>
    </svg>
  );
}
