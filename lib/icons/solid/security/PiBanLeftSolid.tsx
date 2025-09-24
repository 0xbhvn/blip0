import React from 'react';

/**
 * PiBanLeftSolid icon from the solid style in security category.
 */
interface PiBanLeftSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiBanLeftSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'ban-left icon',
  ...props
}: PiBanLeftSolidProps): React.ReactElement {
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
      <path d="M22.15 12c0-5.606-4.544-10.15-10.15-10.15-2.442 0-4.684.864-6.435 2.3L19.85 18.437A10.1 10.1 0 0 0 22.15 12Z" fill="currentColor"/><path d="M18.436 19.85A10.1 10.1 0 0 1 12 22.15C6.395 22.15 1.85 17.606 1.85 12c0-2.442.863-4.684 2.3-6.435z" fill="currentColor"/>
    </svg>
  );
}
