import React from 'react';

/**
 * PiArchiveMinusSolid icon from the solid style in files-&-folders category.
 */
interface PiArchiveMinusSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArchiveMinusSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'archive-minus icon',
  ...props
}: PiArchiveMinusSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M3 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 8a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5zm6 4.5a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
