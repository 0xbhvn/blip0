import React from 'react';

/**
 * PiGitCompareStroke icon from the stroke style in development category.
 */
interface PiGitCompareStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGitCompareStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'git-compare icon',
  ...props
}: PiGitCompareStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 15a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 0v-4a5 5 0 0 0-5-5M6 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0 0v4a5 5 0 0 0 5 5" fill="none"/>
    </svg>
  );
}
