import React from 'react';

/**
 * PiCropStroke icon from the stroke style in editing category.
 */
interface PiCropStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCropStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'crop icon',
  ...props
}: PiCropStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18h8.8c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C18 16.48 18 15.92 18 14.8V6M6 18H2m4 0v4m0-4V9.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C7.52 6 8.08 6 9.2 6H18m0-4v4m0 0h4" fill="none"/>
    </svg>
  );
}
