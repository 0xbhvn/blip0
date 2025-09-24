import React from 'react';

/**
 * PiPlanetRingSolid icon from the solid style in general category.
 */
interface PiPlanetRingSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPlanetRingSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'planet-ring icon',
  ...props
}: PiPlanetRingSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M3 12.001a9 9 0 0 1 15.674-6.039c.975-.301 1.842-.51 2.544-.597.42-.052.844-.068 1.218-.003.344.06.896.238 1.178.798.258.513.12 1.02-.018 1.328-.144.322-.374.63-.623.907-.5.559-1.244 1.188-2.145 1.848l-.022.017c-1.834 1.34-4.464 2.916-7.458 4.422s-5.827 2.678-7.997 3.351l-.024.007c-1.067.33-2.018.553-2.765.62-.37.034-.754.036-1.1-.04-.329-.073-.817-.264-1.076-.778-.281-.56-.095-1.109.062-1.42.17-.34.436-.67.729-.977.487-.511 1.172-1.083 1.995-1.686A9 9 0 0 1 3 12.001Zm4.11 7.556a9 9 0 0 0 13.872-6.977c-1.835 1.243-4.17 2.598-6.735 3.889s-5.045 2.356-7.137 3.088Zm-3.285-3.786q-.59.46-.983.835.531-.09 1.257-.29a9 9 0 0 1-.274-.545Zm16.349-7.54q.593-.463.982-.835-.535.09-1.257.29.147.267.275.545Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
