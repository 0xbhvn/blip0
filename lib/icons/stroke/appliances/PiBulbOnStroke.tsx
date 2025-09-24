import React from 'react';

/**
 * PiBulbOnStroke icon from the stroke style in appliances category.
 */
interface PiBulbOnStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiBulbOnStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'bulb-on icon',
  ...props
}: PiBulbOnStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.379 21h3.242M12 2V1m7 3.707L19.707 4m-15 .707L4 4m18 7h-1M3 11H2m4.313-.532c0-3.023 2.546-5.474 5.687-5.474s5.688 2.45 5.688 5.474c0 1.657-.765 3.142-1.974 4.146-.51.424-.95.95-1.117 1.593l-.227.875c-.14.537-.624.912-1.18.912h-2.38a1.22 1.22 0 0 1-1.18-.912l-.227-.875c-.167-.643-.606-1.17-1.116-1.593-1.21-1.004-1.974-2.489-1.974-4.146Z" fill="none"/>
    </svg>
  );
}
