import React from 'react';

/**
 * PiArrowRightCircleStroke icon from the stroke style in arrows-&-chevrons category.
 */
interface PiArrowRightCircleStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowRightCircleStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-right-circle icon',
  ...props
}: PiArrowRightCircleStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.052 16a20.3 20.3 0 0 0 3.806-3.604A.63.63 0 0 0 16 12m-3.948-4a20.3 20.3 0 0 1 3.806 3.604A.63.63 0 0 1 16 12m0 0H8m13.15 0a9.15 9.15 0 1 1-18.3 0 9.15 9.15 0 0 1 18.3 0Z" fill="none"/>
    </svg>
  );
}
