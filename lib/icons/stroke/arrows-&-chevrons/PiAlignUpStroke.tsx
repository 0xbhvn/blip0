import React from 'react';

/**
 * PiAlignUpStroke icon from the stroke style in arrows-&-chevrons category.
 */
interface PiAlignUpStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAlignUpStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'align-up icon',
  ...props
}: PiAlignUpStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12.03a20.8 20.8 0 0 0-3.679-3.885.64.64 0 0 0-.404-.145m-4.084 4.03a20.8 20.8 0 0 1 3.68-3.885.64.64 0 0 1 .404-.145m0 0v12M19 4H5" fill="none"/>
    </svg>
  );
}
