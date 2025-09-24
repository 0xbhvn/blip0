import React from 'react';

/**
 * PiMaximizeFourLineArrowStroke icon from the stroke style in arrows-&-chevrons category.
 */
interface PiMaximizeFourLineArrowStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMaximizeFourLineArrowStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'maximize-four-line-arrow icon',
  ...props
}: PiMaximizeFourLineArrowStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 20.76a17.3 17.3 0 0 0 4.456.167.52.52 0 0 0 .322-.15M20.76 16a17.3 17.3 0 0 1 .167 4.456.52.52 0 0 1-.15.322m0 0L15 15M8 3.24a17.3 17.3 0 0 0-4.456-.167.52.52 0 0 0-.322.15M3.24 8a17.3 17.3 0 0 1-.167-4.456.52.52 0 0 1 .15-.322m0 0L9 9M8 20.76a17.3 17.3 0 0 1-4.456.167.52.52 0 0 1-.322-.15M3.24 16a17.3 17.3 0 0 0-.167 4.456.52.52 0 0 0 .15.322m0 0L9 15m7-11.76a17.3 17.3 0 0 1 4.456-.167.52.52 0 0 1 .322.15M20.76 8a17.3 17.3 0 0 0 .167-4.456.52.52 0 0 0-.15-.322m0 0L15 9" fill="none"/>
    </svg>
  );
}
