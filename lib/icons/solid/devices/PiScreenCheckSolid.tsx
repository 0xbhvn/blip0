import React from 'react';

/**
 * PiScreenCheckSolid icon from the solid style in devices category.
 */
interface PiScreenCheckSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiScreenCheckSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'screen-check icon',
  ...props
}: PiScreenCheckSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M4.364 1h14.091q-.402.372-.777.771a3 3 0 0 0-3.798 4.61l2.036 2.034a3 3 0 0 0 4.724-.633A10 10 0 0 1 23 4.995v9.641c0 .39 0 .74-.024 1.03a2.5 2.5 0 0 1-.248.97 2.5 2.5 0 0 1-1.093 1.091 2.5 2.5 0 0 1-.968.25c-.292.023-.642.023-1.03.023H13v1.913c1.552.117 3.085.511 4.447 1.192a1 1 0 0 1-.894 1.79c-1.346-.674-2.94-1.02-4.553-1.02s-3.207.346-4.553 1.02a1 1 0 0 1-.894-1.79c1.362-.68 2.895-1.075 4.447-1.192V18H4.364c-.39 0-.74 0-1.03-.024a2.5 2.5 0 0 1-.969-.249 2.5 2.5 0 0 1-1.093-1.092 2.5 2.5 0 0 1-.248-.969q-.032-.514-.024-1.03V4.364c0-.39 0-.74.024-1.03.025-.313.083-.644.248-.97a2.5 2.5 0 0 1 1.093-1.092c.325-.165.656-.223.968-.248C3.625 1 3.976 1 4.364 1Zm18.2 1.826a1 1 0 1 0-1.128-1.652 14 14 0 0 0-3.575 3.53l-1.154-1.153a1 1 0 1 0-1.414 1.415L17.33 7a1 1 0 0 0 1.574-.21 12 12 0 0 1 3.66-3.964Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
