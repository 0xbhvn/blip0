import React from 'react';

/**
 * PiArrowTurnLeftUpSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiArrowTurnLeftUpSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowTurnLeftUpSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-turn-left-up icon',
  ...props
}: PiArrowTurnLeftUpSolidProps): JSX.Element {
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
      <path d="M20 21a1 1 0 1 0 0-2h-3c-1.417 0-2.419 0-3.203-.065-.772-.063-1.243-.182-1.613-.371a4 4 0 0 1-1.748-1.748c-.189-.37-.308-.841-.371-1.613C10 14.419 10 13.417 10 12V9.373q1.003.044 2 .175c.443.058.889.134 1.83.296a1 1 0 0 0 .974-1.58 26.2 26.2 0 0 0-4.684-4.87 1.79 1.79 0 0 0-2.24 0 26.2 26.2 0 0 0-4.684 4.87 1 1 0 0 0 .973 1.58A49 49 0 0 1 6 9.548a23 23 0 0 1 2-.175v2.67c0 1.364 0 2.448.071 3.322.074.896.227 1.66.583 2.359a6 6 0 0 0 2.622 2.622c.7.356 1.463.51 2.359.583.874.071 1.958.071 3.321.071z" fill="currentColor"/>
    </svg>
  );
}
