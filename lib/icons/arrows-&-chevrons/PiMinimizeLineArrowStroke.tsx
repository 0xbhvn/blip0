import React from 'react';

/**
 * PiMinimizeLineArrowStroke icon from the stroke style in arrows-&-chevrons category.
 */
interface PiMinimizeLineArrowStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMinimizeLineArrowStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'minimize-line-arrow icon',
  ...props
}: PiMinimizeLineArrowStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.745 5.599a20.7 20.7 0 0 0-.215 5.31.62.62 0 0 0 .177.384m5.694-.038a20.6 20.6 0 0 1-5.31.215.62.62 0 0 1-.384-.177m0 0L20 4m-8.744 14.401c.3-1.767.372-3.552.214-5.31a.62.62 0 0 0-.177-.384m-5.694.037c1.767-.3 3.552-.372 5.31-.214a.6.6 0 0 1 .384.177m0 0L4 20" fill="none"/>
    </svg>
  );
}
