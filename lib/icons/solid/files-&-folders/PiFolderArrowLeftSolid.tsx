import React from 'react';

/**
 * PiFolderArrowLeftSolid icon from the solid style in files-&-folders category.
 */
interface PiFolderArrowLeftSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFolderArrowLeftSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'folder-arrow-left icon',
  ...props
}: PiFolderArrowLeftSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M8.806 2c.377 0 .758-.001 1.118.108a2.5 2.5 0 0 1 .86.46c.291.24.502.557.71.871l.05.075.576.863c.295.442.335.485.365.51a.5.5 0 0 0 .173.092c.037.011.095.021.626.021h2.359c1.084 0 1.958 0 2.666.058.729.06 1.369.185 1.961.487a5 5 0 0 1 2.185 2.185c.302.593.428 1.233.487 1.962.058.707.058 1.582.058 2.665v2.286c0 1.084 0 1.958-.058 2.666-.06.729-.185 1.369-.487 1.961a5 5 0 0 1-2.185 2.185c-.592.302-1.232.428-1.961.487C17.6 22 16.727 22 15.643 22H8.357c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.961-.487a5 5 0 0 1-2.185-2.185c-.302-.592-.428-1.232-.487-1.961C1 16.6 1 15.727 1 14.643V9.357c0-1.083 0-1.958.058-2.665.06-.73.185-1.37.487-1.962A5 5 0 0 1 3.73 2.545c.592-.302 1.233-.427 1.961-.487C6.4 2 7.273 2 8.357 2zM8 14c0 .328.11.656.328.925a11 11 0 0 0 1.946 1.875 1 1 0 0 0 1.2-1.6 9 9 0 0 1-.257-.2H15a1 1 0 1 0 0-2h-3.783q.127-.102.257-.2a1 1 0 0 0-1.2-1.6 11 11 0 0 0-1.946 1.875A1.47 1.47 0 0 0 8 14Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
