import React from 'react';

/**
 * PiFontAaStroke icon from the stroke style in editing category.
 */
interface PiFontAaStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFontAaStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'font-aa icon',
  ...props
}: PiFontAaStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 12v6M2 19 6.358 6.157a1.744 1.744 0 0 1 3.302.053L14 19m-9.964-6h7.928M22 15a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill="none"/>
    </svg>
  );
}
