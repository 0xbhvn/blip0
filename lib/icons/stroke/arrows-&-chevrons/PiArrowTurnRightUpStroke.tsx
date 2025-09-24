import React from 'react';

/**
 * PiArrowTurnRightUpStroke icon from the stroke style in arrows-&-chevrons category.
 */
interface PiArrowTurnRightUpStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowTurnRightUpStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-turn-right-up icon',
  ...props
}: PiArrowTurnRightUpStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 8.859a25.2 25.2 0 0 0-4.505-4.684A.8.8 0 0 0 15 4m-5 4.859a25.2 25.2 0 0 1 4.505-4.684A.8.8 0 0 1 15 4m0 0v8c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C11.2 20 9.8 20 7 20H4" fill="none"/>
    </svg>
  );
}
