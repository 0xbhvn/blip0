import React from 'react';

/**
 * PiAlignHorizontalCenterStroke icon from the stroke style in arrows-&-chevrons category.
 */
interface PiAlignHorizontalCenterStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAlignHorizontalCenterStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'align-horizontal-center icon',
  ...props
}: PiAlignHorizontalCenterStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.316 9a16.4 16.4 0 0 0-3.197 2.703A.44.44 0 0 0 14 12m3.316 3a16.4 16.4 0 0 1-3.197-2.703A.44.44 0 0 1 14 12m0 0h7M6.684 15a16.4 16.4 0 0 0 3.197-2.703A.44.44 0 0 0 10 12M6.684 9a16.4 16.4 0 0 1 3.197 2.703A.44.44 0 0 1 10 12m0 0H3m9-7v14" fill="none"/>
    </svg>
  );
}
