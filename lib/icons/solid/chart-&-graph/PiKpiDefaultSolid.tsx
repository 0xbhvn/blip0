import React from 'react';

/**
 * PiKpiDefaultSolid icon from the solid style in chart-&-graph category.
 */
interface PiKpiDefaultSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiKpiDefaultSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'kpi-default icon',
  ...props
}: PiKpiDefaultSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M9.357 3.47h5.286c1.084 0 1.958 0 2.666.059.729.06 1.369.185 1.961.487A5 5 0 0 1 21.455 6.2c.302.592.428 1.233.487 1.96.058.71.058 1.585.058 2.669v3.286c0 1.084 0 1.958-.058 2.666-.06.729-.185 1.369-.487 1.96a5 5 0 0 1-2.185 2.186c-.592.302-1.232.428-1.961.487-.708.058-1.582.058-2.666.058H9.357c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.592-.428-1.232-.487-1.961C2 16.072 2 15.198 2 14.114v-3.286c0-1.084 0-1.958.058-2.666.06-.728.185-1.37.487-1.96A5 5 0 0 1 4.73 4.015c.592-.302 1.233-.428 1.961-.487.708-.058 1.582-.057 2.666-.057ZM13 8.22h-1a1 1 0 0 0-1 1v6.5a1 1 0 0 0 2 0v-.856a3 3 0 0 0 3-3v-.643a3 3 0 0 0-3-3Zm1 3.644a1 1 0 0 1-1 1V10.22a1 1 0 0 1 1 1zm4-3.643a1 1 0 0 1 1 1v6.5a1 1 0 0 1-2 0v-6.5a1 1 0 0 1 1-1Zm-11 1a1 1 0 0 0-2 0v6.5a1 1 0 1 0 2 0v-.797l1.24 1.448a1 1 0 1 0 1.52-1.302l-2.398-2.797 2.345-2.345a1 1 0 0 0-1.414-1.414L7 9.807z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
