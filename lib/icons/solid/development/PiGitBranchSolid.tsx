import React from 'react';

/**
 * PiGitBranchSolid icon from the solid style in development category.
 */
interface PiGitBranchSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGitBranchSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'git-branch icon',
  ...props
}: PiGitBranchSolidProps): JSX.Element {
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
      <path d="M14.116 4.539A4.002 4.002 0 0 1 22 5.5a4 4 0 0 1-7.862 1.046A8 8 0 0 0 7 14.5v.126A4.002 4.002 0 0 1 6 22.5a4 4 0 0 1-1-7.874V3a1 1 0 0 1 2 0v5.499a10 10 0 0 1 7.116-3.96Z" fill="currentColor"/>
    </svg>
  );
}
