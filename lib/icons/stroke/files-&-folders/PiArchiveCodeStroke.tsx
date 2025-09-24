import React from 'react';

/**
 * PiArchiveCodeStroke icon from the stroke style in files-&-folders category.
 */
interface PiArchiveCodeStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArchiveCodeStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'archive-code icon',
  ...props
}: PiArchiveCodeStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 8v9a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8M4 8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.286 12.214A11.6 11.6 0 0 0 8.06 14.33a.27.27 0 0 0 0 .34c.642.797 1.39 1.509 2.226 2.116m3.428 0a11.6 11.6 0 0 0 2.226-2.116.27.27 0 0 0 0-.34 11.6 11.6 0 0 0-2.226-2.116" fill="none"/>
    </svg>
  );
}
