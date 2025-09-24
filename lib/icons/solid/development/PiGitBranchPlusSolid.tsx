import React from 'react';

/**
 * PiGitBranchPlusSolid icon from the solid style in development category.
 */
interface PiGitBranchPlusSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGitBranchPlusSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'git-branch-plus icon',
  ...props
}: PiGitBranchPlusSolidProps): React.ReactElement {
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
      <path d="M18 1.5a4 4 0 0 0-3.884 3.039A10 10 0 0 0 7 8.499V3a1 1 0 0 0-2 0v11.626A4.002 4.002 0 0 0 6 22.5a4 4 0 0 0 1-7.874V14.5a8 8 0 0 1 7.138-7.954A4.002 4.002 0 0 0 22 5.5a4 4 0 0 0-4-4Z" fill="currentColor"/><path d="M19 15a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2z" fill="currentColor"/>
    </svg>
  );
}
