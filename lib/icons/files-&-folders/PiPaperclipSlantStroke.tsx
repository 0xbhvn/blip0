import React from 'react';

/**
 * PiPaperclipSlantStroke icon from the stroke style in files-&-folders category.
 */
interface PiPaperclipSlantStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPaperclipSlantStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'paperclip-slant icon',
  ...props
}: PiPaperclipSlantStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19.475 12.781-3.56 6.166a6.103 6.103 0 1 1-10.571-6.103l5.086-8.809a4.069 4.069 0 1 1 7.047 4.069l-5.086 8.809a2.034 2.034 0 0 1-3.524-2.034l4.578-7.929" fill="none"/>
    </svg>
  );
}
