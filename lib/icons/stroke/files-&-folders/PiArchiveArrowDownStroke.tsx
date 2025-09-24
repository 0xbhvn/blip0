import React from 'react';

/**
 * PiArchiveArrowDownStroke icon from the stroke style in files-&-folders category.
 */
interface PiArchiveArrowDownStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArchiveArrowDownStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'archive-arrow-down icon',
  ...props
}: PiArchiveArrowDownStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 8v9a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8M4 8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.429 15.09c.634.846 1.37 1.61 2.19 2.275.112.09.246.135.381.135m0 0a.6.6 0 0 0 .381-.135 13 13 0 0 0 2.19-2.275M12 17.5v-6" fill="none"/>
    </svg>
  );
}
