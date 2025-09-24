import React from 'react';

/**
 * PiGitFork02Solid icon from the solid style in development category.
 */
interface PiGitFork02SolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGitFork02Solid({
  size = 24,
  color,
  className,
  ariaLabel = 'git-fork-02 icon',
  ...props
}: PiGitFork02SolidProps): JSX.Element {
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
      <path d="M6 1.5a4 4 0 0 0-1 7.874v5.252A4.002 4.002 0 0 0 6 22.5a4 4 0 0 0 1.692-7.626c.287-.538.465-.806.681-1.017a3 3 0 0 1 1.12-.693c.438-.151.954-.164 2.462-.164h1.037c.84 0 1.416 0 1.938-.112a5 5 0 0 0 3.433-2.68 5 5 0 0 0 .29-.761 4.001 4.001 0 1 0-2.05-.198l-.034.075a3 3 0 0 1-2.06 1.609c-.287.062-.633.067-1.632.067h-1.092c-1.27 0-2.148 0-2.943.273A5 5 0 0 0 7 12.403v-3.03A4.002 4.002 0 0 0 6 1.5Z" fill="currentColor"/>
    </svg>
  );
}
