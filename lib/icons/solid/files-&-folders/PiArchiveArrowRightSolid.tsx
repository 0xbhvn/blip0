import React from 'react';

/**
 * PiArchiveArrowRightSolid icon from the solid style in files-&-folders category.
 */
interface PiArchiveArrowRightSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArchiveArrowRightSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'archive-arrow-right icon',
  ...props
}: PiArchiveArrowRightSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M3 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 8a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5zm6 4.5a1 1 0 0 0 0 2h3.916q-.443.409-.926.771a1 1 0 1 0 1.2 1.6 14 14 0 0 0 2.452-2.361 1.6 1.6 0 0 0 0-2.02 14 14 0 0 0-2.452-2.361 1 1 0 0 0-1.2 1.6q.483.362.926.771z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
