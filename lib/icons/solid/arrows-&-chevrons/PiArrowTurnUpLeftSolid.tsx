import React from 'react';

/**
 * PiArrowTurnUpLeftSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiArrowTurnUpLeftSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowTurnUpLeftSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-turn-up-left icon',
  ...props
}: PiArrowTurnUpLeftSolidProps): JSX.Element {
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
      <path d="M21 20a1 1 0 1 1-2 0v-3c0-1.417 0-2.419-.065-3.203-.063-.772-.182-1.243-.371-1.613a4 4 0 0 0-1.748-1.748c-.37-.189-.841-.308-1.613-.371C14.419 10 13.417 10 12 10H9.373q.044 1.003.175 2c.058.443.134.889.296 1.83a1 1 0 0 1-1.58.974 26.2 26.2 0 0 1-4.87-4.684 1.79 1.79 0 0 1 0-2.24 26.2 26.2 0 0 1 4.87-4.684 1 1 0 0 1 1.58.973A49 49 0 0 0 9.548 6a23 23 0 0 0-.175 2h2.67c1.364 0 2.448 0 3.322.071.896.074 1.66.227 2.359.583a6 6 0 0 1 2.622 2.622c.356.7.51 1.463.583 2.359.071.874.071 1.958.071 3.321z" fill="currentColor"/>
    </svg>
  );
}
