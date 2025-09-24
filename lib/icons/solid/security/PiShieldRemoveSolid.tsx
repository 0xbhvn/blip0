import React from 'react';

/**
 * PiShieldRemoveSolid icon from the solid style in security category.
 */
interface PiShieldRemoveSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiShieldRemoveSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'shield-remove icon',
  ...props
}: PiShieldRemoveSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M10.543 1.427a4 4 0 0 1 2.717 0l5.466 1.974a4 4 0 0 1 2.63 3.455l.226 2.951a12 12 0 0 1-6.25 11.472l-1.488.806a4 4 0 0 1-3.886-.042l-1.52-.867A12 12 0 0 1 2.39 10.29l.127-3.309a4 4 0 0 1 2.638-3.608zM9 11a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
