import React from 'react';

/**
 * PiArrowBigLeftStroke icon from the stroke style in arrows-&-chevrons category.
 */
interface PiArrowBigLeftStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowBigLeftStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-big-left icon',
  ...props
}: PiArrowBigLeftStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.998 10.6v2.8c0 .56 0 .84-.11 1.054a1 1 0 0 1-.437.437c-.213.109-.494.109-1.053.109H9.474q.099 2.005.33 4a35.3 35.3 0 0 1-6.557-6.307 1.11 1.11 0 0 1 0-1.386A35.3 35.3 0 0 1 9.805 5a61 61 0 0 0-.33 4h9.923c.56 0 .84 0 1.053.109a1 1 0 0 1 .438.437c.108.214.108.494.108 1.054Z" fill="none"/>
    </svg>
  );
}
