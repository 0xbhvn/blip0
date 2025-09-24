import React from 'react';

/**
 * PiArchiveInformationSolid icon from the solid style in files-&-folders category.
 */
interface PiArchiveInformationSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArchiveInformationSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'archive-information icon',
  ...props
}: PiArchiveInformationSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M3 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 8a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5zm10 8.01a1 1 0 0 1-2 0v-3a1 1 0 0 1 2 0zm0-6a1 1 0 0 1-2 0V12a1 1 0 0 1 2 0z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
