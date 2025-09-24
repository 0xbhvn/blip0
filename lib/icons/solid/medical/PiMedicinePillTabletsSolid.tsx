import React from 'react';

/**
 * PiMedicinePillTabletsSolid icon from the solid style in medical category.
 */
interface PiMedicinePillTabletsSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMedicinePillTabletsSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'medicine-pill-tablets icon',
  ...props
}: PiMedicinePillTabletsSolidProps): JSX.Element {
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
      <path d="M12.99 6.629 1.393 9.133A6.001 6.001 0 0 0 12.99 6.629Z" fill="currentColor"/><path d="M1.012 7.373A6.002 6.002 0 0 1 12.611 4.87z" fill="currentColor"/><path d="M11.739 14.117a6.001 6.001 0 0 1 11.143 4.078z" fill="currentColor"/><path d="M11.12 15.807a6.002 6.002 0 0 0 11.143 4.079z" fill="currentColor"/>
    </svg>
  );
}
