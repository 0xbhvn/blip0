import React from 'react';

/**
 * PiArrowLeftDownSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiArrowLeftDownSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowLeftDownSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-left-down icon',
  ...props
}: PiArrowLeftDownSolidProps): JSX.Element {
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
      <path d="m6.485 9.1 3.325 3.676L17.884 4.7a1 1 0 0 1 1.414 1.415l-8.074 8.074 3.675 3.325a1 1 0 0 1-.522 1.73c-2.673.4-5.38.453-8.055.157a1.95 1.95 0 0 1-1.725-1.724 31.2 31.2 0 0 1 .157-8.055 1 1 0 0 1 1.73-.523Z" fill="currentColor"/>
    </svg>
  );
}
