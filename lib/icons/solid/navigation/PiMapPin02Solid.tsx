import React from 'react';

/**
 * PiMapPin02Solid icon from the solid style in navigation category.
 */
interface PiMapPin02SolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMapPin02Solid({
  size = 24,
  color,
  className,
  ariaLabel = 'map-pin-02 icon',
  ...props
}: PiMapPin02SolidProps): JSX.Element {
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
      <path d="M12 2a6 6 0 0 0-1 11.917V21a1 1 0 1 0 2 0v-7.083A6.002 6.002 0 0 0 12 2Z" fill="currentColor"/>
    </svg>
  );
}
