import React from 'react';

/**
 * PiGitCommitSolid icon from the solid style in development category.
 */
interface PiGitCommitSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGitCommitSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'git-commit icon',
  ...props
}: PiGitCommitSolidProps): React.ReactElement {
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
      <path d="M12 8a4 4 0 0 0-3.874 3H3a1 1 0 1 0 0 2h5.126a4.002 4.002 0 0 0 7.748 0H21a1 1 0 1 0 0-2h-5.126A4 4 0 0 0 12 8Z" fill="currentColor"/>
    </svg>
  );
}
