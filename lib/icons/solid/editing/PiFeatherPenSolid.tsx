import React from 'react';

/**
 * PiFeatherPenSolid icon from the solid style in editing category.
 */
interface PiFeatherPenSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFeatherPenSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'feather-pen icon',
  ...props
}: PiFeatherPenSolidProps): React.ReactElement {
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
      <path d="m21.842 2.96.008.31c.03 2.418-.668 5.542-2.835 7.801-2.171.606-4.3.929-6.015.929a1 1 0 1 0 0 2c1.122 0 2.384-.124 3.709-.356-.264 1.16-.948 2.352-2.45 3.208-1.967 1.12-5.185 1.563-10.315.875-.322 1.495-.444 2.816-.444 3.773a1 1 0 1 1-2 0c0-1.314.193-3.137.713-5.143l.16-.582c.843-2.94 2.415-6.261 5.18-8.913C10.527 4.012 14.81 2 20.844 2h.96z" fill="currentColor"/>
    </svg>
  );
}
