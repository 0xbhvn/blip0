import React from 'react';

/**
 * PiRiveStroke icon from the stroke style in apps-&-social category.
 */
interface PiRiveStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiRiveStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'rive icon',
  ...props
}: PiRiveStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 3h10a5 5 0 0 1 .947 9.91M9 13h5q.486 0 .947-.09m0 0L20 21" fill="none"/>
    </svg>
  );
}
