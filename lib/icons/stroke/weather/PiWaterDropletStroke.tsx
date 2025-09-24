import React from 'react';

/**
 * PiWaterDropletStroke icon from the stroke style in weather category.
 */
interface PiWaterDropletStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiWaterDropletStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'water-droplet icon',
  ...props
}: PiWaterDropletStrokeProps): React.ReactElement {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3c13 11 5.712 18 0 18s-13-7 0-18Z" fill="none"/>
    </svg>
  );
}
