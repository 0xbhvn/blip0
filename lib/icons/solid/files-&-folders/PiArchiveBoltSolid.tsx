import React from 'react';

/**
 * PiArchiveBoltSolid icon from the solid style in files-&-folders category.
 */
interface PiArchiveBoltSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArchiveBoltSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'archive-bolt icon',
  ...props
}: PiArchiveBoltSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M3 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 8a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5zm9.8 2.6a1 1 0 1 0-1.6-1.2l-2.251 3.002c-.812 1.082.112 2.602 1.446 2.38l2.308-.385L11.2 18.4a1 1 0 1 0 1.6 1.2l2.251-3.002c.812-1.082-.111-2.602-1.446-2.38l-2.308.385z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
