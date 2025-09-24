import React from 'react';

/**
 * PiEarthGlobeSolid icon from the solid style in navigation category.
 */
interface PiEarthGlobeSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiEarthGlobeSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'earth-globe icon',
  ...props
}: PiEarthGlobeSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M12 1.85A10.15 10.15 0 0 0 1.85 12c0 5.606 4.544 10.15 10.15 10.15 1.556 0 3.033-.35 4.353-.979a10.2 10.2 0 0 0 4.73-4.638A10.1 10.1 0 0 0 22.15 12 10.15 10.15 0 0 0 12 1.85Zm1.268 8.13c1.851-.894 3.295-2.436 3.842-4.33A8.13 8.13 0 0 1 20.15 12c0 .859-.133 1.685-.378 2.461a2.742 2.742 0 0 0-4.81 2.588 4.1 4.1 0 0 0-.3 2.657A8.1 8.1 0 0 1 12 20.15 8.15 8.15 0 0 1 4.32 9.26q.44.317.928.576a4.12 4.12 0 0 0 2.268 4.746 2.742 2.742 0 1 0 5.143-1.445 4.1 4.1 0 0 0 .608-3.156Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
