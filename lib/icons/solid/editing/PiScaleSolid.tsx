import React from 'react';

/**
 * PiScaleSolid icon from the solid style in editing category.
 */
interface PiScaleSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiScaleSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'scale icon',
  ...props
}: PiScaleSolidProps): React.ReactElement {
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
      <path d="M14.609 1.369a3 3 0 0 1 1.854 0c.404.13.732.358 1.035.615.286.243.608.565.98.938l2.6 2.6c.373.372.695.694.938.98.257.303.485.631.616 1.035a3 3 0 0 1 0 1.854c-.132.404-.36.733-.616 1.035-.243.287-.565.608-.937.98l-9.672 9.672a18 18 0 0 1-.98.938c-.303.256-.631.484-1.035.615a3 3 0 0 1-1.854 0c-.404-.131-.733-.359-1.035-.615a18 18 0 0 1-.98-.938l-2.6-2.6a18 18 0 0 1-.938-.98c-.257-.303-.485-.632-.616-1.036a3 3 0 0 1 0-1.854c.131-.404.359-.732.616-1.034q.06-.073.128-.148c.37-.41 1.012-.402 1.402-.012L7.05 16.95a1 1 0 0 0 1.415-1.414L4.929 12a1 1 0 1 1 1.414-1.414l2.121 2.121a1 1 0 0 0 1.415-1.414L7.757 9.172a1 1 0 0 1 1.415-1.415l3.536 3.536a1 1 0 0 0 1.414-1.415l-3.536-3.535A1 1 0 1 1 12 4.929l2.122 2.121a1 1 0 1 0 1.414-1.414l-2.121-2.122c-.39-.39-.399-1.032.012-1.401l.147-.129c.303-.257.63-.484 1.035-.615Z" fill="currentColor"/>
    </svg>
  );
}
