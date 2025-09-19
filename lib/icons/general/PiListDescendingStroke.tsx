import React from 'react';

/**
 * PiListDescendingStroke icon from the stroke style in general category.
 */
interface PiListDescendingStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiListDescendingStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'list-descending icon',
  ...props
}: PiListDescendingStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12h9m-9 6h9M12 6h9M3 20.5v-2.697c0-1.391.847-2.642 2.139-3.16a.97.97 0 0 1 .722 0A3.4 3.4 0 0 1 8 17.804V20.5m-5-2h5m-5-14 .106-.022a12.2 12.2 0 0 1 4.788 0c.045.01.062.065.03.098L3.13 9.368a.056.056 0 0 0 .051.095 11.8 11.8 0 0 1 4.636 0L8 9.5" fill="none"/>
    </svg>
  );
}
