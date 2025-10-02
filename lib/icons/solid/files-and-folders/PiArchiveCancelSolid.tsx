import React from 'react';

/**
 * PiArchiveCancelSolid icon from the solid style in files-&-folders category.
 */
interface PiArchiveCancelSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArchiveCancelSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'archive-cancel icon',
  ...props
}: PiArchiveCancelSolidProps): React.ReactElement {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      
       style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path fillRule="evenodd" d="M3 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 8a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5zm7.232 2.293a1 1 0 0 0-1.414 1.414l1.768 1.768-1.768 1.768a1 1 0 0 0 1.414 1.414L12 16.889l1.768 1.768a1 1 0 0 0 1.414-1.414l-1.768-1.768 1.768-1.768a1 1 0 0 0-1.414-1.414L12 14.06z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
