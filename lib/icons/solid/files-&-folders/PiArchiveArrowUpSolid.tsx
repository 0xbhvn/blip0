import React from 'react';

/**
 * PiArchiveArrowUpSolid icon from the solid style in files-&-folders category.
 */
interface PiArchiveArrowUpSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArchiveArrowUpSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'archive-arrow-up icon',
  ...props
}: PiArchiveArrowUpSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M3 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 8a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5zm10 8.5a1 1 0 0 1-2 0v-3.916q-.409.443-.771.926a1 1 0 1 1-1.6-1.2 14 14 0 0 1 2.361-2.452 1.6 1.6 0 0 1 2.02 0c.884.717 1.678 1.54 2.361 2.452a1 1 0 1 1-1.6 1.2 12 12 0 0 0-.771-.926z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
