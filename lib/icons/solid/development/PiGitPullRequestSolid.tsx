import React from 'react';

/**
 * PiGitPullRequestSolid icon from the solid style in development category.
 */
interface PiGitPullRequestSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGitPullRequestSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'git-pull-request icon',
  ...props
}: PiGitPullRequestSolidProps): JSX.Element {
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
      <path d="M6 2a4 4 0 0 0-1 7.874V21a1 1 0 1 0 2 0V9.874A4.002 4.002 0 0 0 6 2Z" fill="currentColor"/><path d="M13 5a1 1 0 1 0 0 2 4 4 0 0 1 4 4v3.126A4.002 4.002 0 0 0 18 22a4 4 0 0 0 1-7.874V11a6 6 0 0 0-6-6Z" fill="currentColor"/>
    </svg>
  );
}
