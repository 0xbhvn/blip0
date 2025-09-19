import React from 'react';

/**
 * PiGitPullRequestDraftStroke icon from the stroke style in development category.
 */
interface PiGitPullRequestDraftStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGitPullRequestDraftStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'git-pull-request-draft icon',
  ...props
}: PiGitPullRequestDraftStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 9v12M6 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm12 6a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 0v-2m-5-7q.514 0 1 .1M17 8q.348.462.584 1" fill="none"/>
    </svg>
  );
}
