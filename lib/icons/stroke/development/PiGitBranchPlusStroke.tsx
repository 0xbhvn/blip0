import React from 'react';

/**
 * PiGitBranchPlusStroke icon from the stroke style in development category.
 */
interface PiGitBranchPlusStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGitBranchPlusStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'git-branch-plus icon',
  ...props
}: PiGitBranchPlusStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 15.5V3m0 12.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm9-10a3 3 0 1 0 6 0 3 3 0 0 0-6 0Zm0 0a9 9 0 0 0-9 9M18 21v-3m0 0v-3m0 3h-3m3 0h3" fill="none"/>
    </svg>
  );
}
