import React from 'react';

/**
 * PiArrowBigTurnLeftSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiArrowBigTurnLeftSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowBigTurnLeftSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-big-turn-left icon',
  ...props
}: PiArrowBigTurnLeftSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M9.204 4.196a1 1 0 0 1 1.588.92 60 60 0 0 0-.264 2.904c3.39.13 6.178.917 8.175 2.588 2.239 1.873 3.3 4.7 3.3 8.392a1 1 0 0 1-1.8.6c-2.454-3.273-5.595-3.57-9.674-3.597q.096 1.445.264 2.882a1 1 0 0 1-1.588.919 36.3 36.3 0 0 1-6.744-6.485 2.11 2.11 0 0 1 0-2.638 36.3 36.3 0 0 1 6.744-6.485z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
