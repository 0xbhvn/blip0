import React from 'react';

/**
 * PiMarkdownSolid icon from the solid style in development category.
 */
interface PiMarkdownSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMarkdownSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'markdown icon',
  ...props
}: PiMarkdownSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M9.357 3C8.273 3 7.4 3 6.691 3.058c-.728.06-1.369.185-1.96.487A5 5 0 0 0 2.544 5.73c-.302.592-.428 1.233-.487 1.961C2 8.4 2 9.273 2 10.357v3.286c0 1.084 0 1.958.058 2.666.06.729.185 1.369.487 1.961a5 5 0 0 0 2.185 2.185c.592.302 1.233.428 1.961.487C7.4 21 8.273 21 9.357 21h5.286c1.084 0 1.958 0 2.666-.058.729-.06 1.369-.185 1.961-.487a5 5 0 0 0 2.185-2.185c.302-.592.428-1.232.487-1.961C22 15.6 22 14.727 22 13.643v-3.286c0-1.084 0-1.958-.058-2.666-.06-.728-.185-1.369-.487-1.96a5 5 0 0 0-2.185-2.186c-.592-.302-1.232-.428-1.961-.487C16.6 3 15.727 3 14.643 3zM5.66 8.06a1 1 0 0 1 1.108.3L8.5 10.438l1.732-2.078A1 1 0 0 1 12 9v6a1 1 0 1 1-2 0v-3.238l-.732.878a1 1 0 0 1-1.536 0L7 11.762V15a1 1 0 1 1-2 0V9a1 1 0 0 1 .66-.94ZM17 9a1 1 0 1 0-2 0v3.783a9 9 0 0 1-.2-.257 1 1 0 0 0-1.6 1.2 11 11 0 0 0 1.875 1.946 1.47 1.47 0 0 0 1.85 0 11 11 0 0 0 1.875-1.946 1 1 0 0 0-1.6-1.2 9 9 0 0 1-.2.257z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
