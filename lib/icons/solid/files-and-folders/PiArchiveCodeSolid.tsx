import React from 'react';

/**
 * PiArchiveCodeSolid icon from the solid style in files-&-folders category.
 */
interface PiArchiveCodeSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArchiveCodeSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'archive-code icon',
  ...props
}: PiArchiveCodeSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M3 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm1 7a1 1 0 0 0-1 1v7a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5v-7a1 1 0 0 0-1-1zm7.095 3.627a1 1 0 0 1-.222 1.396c-.6.437-1.151.932-1.644 1.477a10.7 10.7 0 0 0 1.645 1.477 1 1 0 0 1-1.176 1.618 12.6 12.6 0 0 1-2.417-2.298 1.27 1.27 0 0 1 0-1.594 12.6 12.6 0 0 1 2.417-2.298 1 1 0 0 1 1.397.222Zm3.207-.222a1.001 1.001 0 1 0-1.175 1.618c.6.437 1.151.932 1.644 1.477a10.7 10.7 0 0 1-1.645 1.477 1 1 0 0 0 1.176 1.618 12.6 12.6 0 0 0 2.416-2.298 1.27 1.27 0 0 0 0-1.594 12.6 12.6 0 0 0-2.416-2.298Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
