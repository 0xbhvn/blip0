import React from 'react';

/**
 * PiArrowTurnDownLeftSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiArrowTurnDownLeftSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowTurnDownLeftSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-turn-down-left icon',
  ...props
}: PiArrowTurnDownLeftSolidProps): React.ReactElement {
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
      <path d="M21 4a1 1 0 1 0-2 0v3c0 1.417 0 2.419-.065 3.203-.063.772-.182 1.243-.371 1.613a4 4 0 0 1-1.748 1.748c-.37.189-.841.308-1.613.371C14.419 14 13.417 14 12 14H9.373q.044-1.003.175-2c.058-.443.134-.889.296-1.83a1 1 0 0 0-1.58-.974 26.2 26.2 0 0 0-4.87 4.684 1.79 1.79 0 0 0 0 2.24 26.2 26.2 0 0 0 4.87 4.684 1 1 0 0 0 1.58-.973A49 49 0 0 1 9.548 18a23 23 0 0 1-.175-2h2.67c1.364 0 2.448 0 3.322-.071.896-.074 1.66-.227 2.359-.583a6 6 0 0 0 2.622-2.622c.356-.7.51-1.463.583-2.359C21 9.491 21 8.407 21 7.044z" fill="currentColor"/>
    </svg>
  );
}
