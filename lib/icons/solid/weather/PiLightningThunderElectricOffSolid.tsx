import React from 'react';

/**
 * PiLightningThunderElectricOffSolid icon from the solid style in weather category.
 */
interface PiLightningThunderElectricOffSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiLightningThunderElectricOffSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'lightning-thunder-electric-off icon',
  ...props
}: PiLightningThunderElectricOffSolidProps): JSX.Element {
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
      <path d="M22.707 2.707a1 1 0 0 0-1.414-1.414l-4.7 4.699c.172-.688.308-1.269.387-1.743.1-.588.166-1.274-.116-1.855a2.46 2.46 0 0 0-1.924-1.383c-.672-.076-1.29.273-1.764.582-.516.337-1.158.84-1.943 1.456L5.399 7.622c-.592.464-1.09.854-1.452 1.196-.36.34-.728.758-.867 1.307a2.63 2.63 0 0 0 .381 2.136c.328.473.828.726 1.283.904.457.18 1.056.35 1.764.552l.615.176c.41.117.656.188.836.256a1 1 0 0 1 .18.086l.005.003q.05.048.09.114l-6.941 6.94a1 1 0 1 0 1.414 1.415z" fill="currentColor"/><path d="M17.262 10.97a1 1 0 0 1 .992-.252c.49.145.928.287 1.286.453.36.167.737.402 1.003.789.43.625.562 1.414.373 2.145-.144.553-.518.97-.884 1.309-.369.34-.875.73-1.477 1.193l-5.73 4.403c-.78.599-1.42 1.09-1.933 1.418-.472.301-1.09.64-1.756.56a2.44 2.44 0 0 1-1.695-1.023 1 1 0 0 1 .11-1.284z" fill="currentColor"/>
    </svg>
  );
}
