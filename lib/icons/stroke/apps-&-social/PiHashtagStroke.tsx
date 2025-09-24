import React from 'react';

/**
 * PiHashtagStroke icon from the stroke style in apps-&-social category.
 */
interface PiHashtagStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiHashtagStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'hashtag icon',
  ...props
}: PiHashtagStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 20 .938-5m0 0 1.125-6m-1.126 6h7m-7 0H3.5m5.563-6L10 4m-.937 5h7m-7 0H4.5M14 20l.938-5m0 0 1.124-6m-1.125 6H19.5m-3.437-6L17 4m-.937 5H20.5" fill="none"/>
    </svg>
  );
}
