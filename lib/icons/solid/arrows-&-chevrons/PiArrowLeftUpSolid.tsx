import React from 'react';

/**
 * PiArrowLeftUpSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiArrowLeftUpSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowLeftUpSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-left-up icon',
  ...props
}: PiArrowLeftUpSolidProps): JSX.Element {
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
      <path d="m6.485 14.9 3.325-3.676 8.074 8.074a1 1 0 0 0 1.414-1.414L11.224 9.81l3.675-3.325a1 1 0 0 0-.522-1.73c-2.673-.4-5.38-.453-8.055-.158a1.95 1.95 0 0 0-1.725 1.725 31.2 31.2 0 0 0 .157 8.055 1 1 0 0 0 1.73.522Z" fill="currentColor"/>
    </svg>
  );
}
