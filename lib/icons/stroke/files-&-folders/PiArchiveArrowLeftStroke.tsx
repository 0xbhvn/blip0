import React from 'react';

/**
 * PiArchiveArrowLeftStroke icon from the stroke style in files-&-folders category.
 */
interface PiArchiveArrowLeftStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArchiveArrowLeftStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'archive-arrow-left icon',
  ...props
}: PiArchiveArrowLeftStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8.5h16m-16 0v9a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-9m-16 0a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.41 17.57a13 13 0 0 1-2.275-2.19A.6.6 0 0 1 9 15m0 0c0-.139.048-.274.135-.381a13 13 0 0 1 2.275-2.19M9 14.999h6" fill="none"/>
    </svg>
  );
}
