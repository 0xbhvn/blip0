import React from 'react';

/**
 * PiArrowTurnUpLeftStroke icon from the stroke style in arrows-&-chevrons category.
 */
interface PiArrowTurnUpLeftStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowTurnUpLeftStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-turn-up-left icon',
  ...props
}: PiArrowTurnUpLeftStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.859 4a25.2 25.2 0 0 0-4.684 4.505A.8.8 0 0 0 4 9m4.859 5a25.2 25.2 0 0 1-4.684-4.505A.8.8 0 0 1 4 9m0 0h8c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C20 12.8 20 14.2 20 17v3" fill="none"/>
    </svg>
  );
}
