import React from 'react';

/**
 * PiShieldCheckSolid icon from the solid style in security category.
 */
interface PiShieldCheckSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiShieldCheckSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'shield-check icon',
  ...props
}: PiShieldCheckSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M10.543 1.427a4 4 0 0 1 2.717 0l5.466 1.974a4 4 0 0 1 2.63 3.455l.226 2.951a12 12 0 0 1-6.25 11.472l-1.488.806a4 4 0 0 1-3.886-.042l-1.52-.867A12 12 0 0 1 2.39 10.29l.127-3.309a4 4 0 0 1 2.638-3.608zm5.253 9.133a1 1 0 0 0-1.128-1.652 14.4 14.4 0 0 0-3.67 3.6L9.84 11.35a1 1 0 1 0-1.413 1.415l2.04 2.038a1 1 0 0 0 1.575-.211 12.3 12.3 0 0 1 3.755-4.032Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
