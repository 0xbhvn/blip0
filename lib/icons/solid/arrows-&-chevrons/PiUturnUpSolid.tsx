import React from 'react';

/**
 * PiUturnUpSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiUturnUpSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiUturnUpSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'uturn-up icon',
  ...props
}: PiUturnUpSolidProps): JSX.Element {
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
      <path d="M15 15a4 4 0 0 1-8 0v-3a1 1 0 1 0-2 0v3a6 6 0 0 0 12 0V8.817q.345.015.69.04l2.32.171a1 1 0 0 0 .882-1.586 21.8 21.8 0 0 0-3.856-4.073 1.64 1.64 0 0 0-2.072 0 21.8 21.8 0 0 0-3.856 4.073 1 1 0 0 0 .882 1.586l2.32-.17q.345-.027.69-.041z" fill="currentColor"/>
    </svg>
  );
}
