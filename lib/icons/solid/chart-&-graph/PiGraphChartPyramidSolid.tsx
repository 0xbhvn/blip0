import React from 'react';

/**
 * PiGraphChartPyramidSolid icon from the solid style in chart-&-graph category.
 */
interface PiGraphChartPyramidSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGraphChartPyramidSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'graph-chart-pyramid icon',
  ...props
}: PiGraphChartPyramidSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M14.194 4.335a2.478 2.478 0 0 0-4.39 0L7.68 8.262A.5.5 0 0 0 8.12 9h7.762a.5.5 0 0 0 .44-.738zm3.75 6.927a.5.5 0 0 0-.44-.262H6.495a.5.5 0 0 0-.44.262l-1.623 3a.5.5 0 0 0 .44.738H19.13a.5.5 0 0 0 .44-.738zM2.32 18.159l.486-.897a.5.5 0 0 1 .44-.262h17.508a.5.5 0 0 1 .44.262l.486.897c.895 1.653-.197 3.849-2.195 3.849H4.515c-1.998 0-3.09-2.196-2.195-3.85Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
