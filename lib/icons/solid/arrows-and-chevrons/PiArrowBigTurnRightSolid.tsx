import React from 'react';

/**
 * PiArrowBigTurnRightSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiArrowBigTurnRightSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowBigTurnRightSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-big-turn-right icon',
  ...props
}: PiArrowBigTurnRightSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M14.797 4.196a1 1 0 0 0-1.59.92q.168 1.449.266 2.904c-3.391.13-6.18.917-8.176 2.588-2.238 1.873-3.3 4.7-3.3 8.392a1 1 0 0 0 1.8.6c2.455-3.273 5.596-3.57 9.675-3.597a60 60 0 0 1-.264 2.882 1 1 0 0 0 1.588.919 36.3 36.3 0 0 0 6.744-6.485 2.11 2.11 0 0 0 0-2.638 36.3 36.3 0 0 0-6.744-6.485z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
