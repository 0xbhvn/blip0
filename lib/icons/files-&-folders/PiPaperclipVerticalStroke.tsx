import React from 'react';

/**
 * PiPaperclipVerticalStroke icon from the stroke style in files-&-folders category.
 */
interface PiPaperclipVerticalStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPaperclipVerticalStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'paperclip-vertical icon',
  ...props
}: PiPaperclipVerticalStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v7a6 6 0 0 1-12 0V6a4 4 0 1 1 8 0v10a2 2 0 1 1-4 0V7" fill="none"/>
    </svg>
  );
}
