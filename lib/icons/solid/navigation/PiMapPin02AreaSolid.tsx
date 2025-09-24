import React from 'react';

/**
 * PiMapPin02AreaSolid icon from the solid style in navigation category.
 */
interface PiMapPin02AreaSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMapPin02AreaSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'map-pin-02-area icon',
  ...props
}: PiMapPin02AreaSolidProps): JSX.Element {
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
      <path d="M12 2a5 5 0 0 0-1 9.9V17a1 1 0 1 0 2 0v-5.1A5.002 5.002 0 0 0 12 2Z" fill="currentColor"/><path d="M7.185 16.147a1 1 0 1 0-.37-1.965c-1.55.291-2.914.72-3.919 1.274C1.966 15.969 1 16.788 1 17.98c0 .897.56 1.584 1.177 2.058.63.485 1.481.878 2.443 1.19 1.934.63 4.543 1.002 7.38 1.002s5.446-.373 7.38-1.001c.962-.313 1.812-.706 2.443-1.191.617-.474 1.177-1.16 1.177-2.058 0-1.192-.966-2.011-1.896-2.524-1.005-.554-2.369-.983-3.92-1.274a1 1 0 1 0-.369 1.965c1.439.27 2.575.648 3.323 1.06.823.454.862.761.862.773 0 .006 0 .043-.05.122a1.4 1.4 0 0 1-.345.35c-.381.292-.995.599-1.843.875-1.685.547-4.076.903-6.762.903s-5.077-.356-6.762-.903c-.848-.276-1.462-.583-1.843-.875a1.4 1.4 0 0 1-.346-.35C3 18.023 3 17.986 3 17.98c0-.012.04-.32.862-.773.748-.412 1.884-.79 3.323-1.06Z" fill="currentColor"/>
    </svg>
  );
}
