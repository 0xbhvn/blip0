import React from 'react';

/**
 * PiArrowTurnDownLeftStroke icon from the stroke style in arrows-&-chevrons category.
 */
interface PiArrowTurnDownLeftStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowTurnDownLeftStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-turn-down-left icon',
  ...props
}: PiArrowTurnDownLeftStrokeProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.859 20a25.2 25.2 0 0 1-4.684-4.505A.8.8 0 0 1 4 15m4.859-5a25.2 25.2 0 0 0-4.684 4.505A.8.8 0 0 0 4 15m0 0h8c2.8 0 4.2 0 5.27-.545a5 5 0 0 0 2.185-2.185C20 11.2 20 9.8 20 7V4" fill="none"/>
    </svg>
  );
}
