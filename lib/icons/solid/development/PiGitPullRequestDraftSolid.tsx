import React from 'react';

/**
 * PiGitPullRequestDraftSolid icon from the solid style in development category.
 */
interface PiGitPullRequestDraftSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGitPullRequestDraftSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'git-pull-request-draft icon',
  ...props
}: PiGitPullRequestDraftSolidProps): React.ReactElement {
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
      <path d="M2 6a4 4 0 1 1 5 3.874V21a1 1 0 1 1-2 0V9.874A4 4 0 0 1 2 6Z" fill="currentColor"/><path d="M14 18a4 4 0 0 1 3-3.874V13a1 1 0 1 1 2 0v1.126A4.002 4.002 0 0 1 18 22a4 4 0 0 1-4-4Z" fill="currentColor"/><path d="M12 6a1 1 0 0 1 1-1q.615 0 1.199.12a1 1 0 1 1-.398 1.96A4 4 0 0 0 13 7a1 1 0 0 1-1-1Z" fill="currentColor"/><path d="M16.4 7.2a1 1 0 0 1 1.4.199c.277.369.513.772.7 1.2a1 1 0 0 1-1.832.801 4 4 0 0 0-.467-.8 1 1 0 0 1 .198-1.4Z" fill="currentColor"/>
    </svg>
  );
}
