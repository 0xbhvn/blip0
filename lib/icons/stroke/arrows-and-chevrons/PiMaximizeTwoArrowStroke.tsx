import React from 'react';

/**
 * PiMaximizeTwoArrowStroke icon from the stroke style in arrows-&-chevrons category.
 */
interface PiMaximizeTwoArrowStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMaximizeTwoArrowStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'maximize-two-arrow icon',
  ...props
}: PiMaximizeTwoArrowStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.289a20.8 20.8 0 0 1 5.347-.202.625.625 0 0 1 .566.566A20.8 20.8 0 0 1 17.71 12M12 17.711a20.8 20.8 0 0 1-5.347.202.624.624 0 0 1-.566-.566A20.8 20.8 0 0 1 6.29 12" fill="none"/>
    </svg>
  );
}
