import React from 'react';

/**
 * PiMinimizeFourLineArrowStroke icon from the stroke style in arrows-&-chevrons category.
 */
interface PiMinimizeFourLineArrowStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMinimizeFourLineArrowStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'minimize-four-line-arrow icon',
  ...props
}: PiMinimizeFourLineArrowStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 15.24a17.3 17.3 0 0 0-4.456-.167.52.52 0 0 0-.322.15M15.241 20a17.3 17.3 0 0 1-.168-4.456.52.52 0 0 1 .15-.322m0 0L21 21M4 8.76a17.3 17.3 0 0 0 4.456.167.52.52 0 0 0 .322-.15M8.76 4a17.3 17.3 0 0 1 .167 4.456.52.52 0 0 1-.15.322m0 0L3 3m1 12.24a17.3 17.3 0 0 1 4.456-.167.52.52 0 0 1 .322.15M8.76 20a17.3 17.3 0 0 0 .167-4.456.52.52 0 0 0-.15-.322m0 0L3 21M20 8.76a17.3 17.3 0 0 1-4.456.167.52.52 0 0 1-.322-.15M15.241 4a17.3 17.3 0 0 0-.168 4.456.52.52 0 0 0 .15.322m0 0L21 3" fill="none"/>
    </svg>
  );
}
