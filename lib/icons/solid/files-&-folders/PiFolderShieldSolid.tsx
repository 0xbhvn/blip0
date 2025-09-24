import React from 'react';

/**
 * PiFolderShieldSolid icon from the solid style in files-&-folders category.
 */
interface PiFolderShieldSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFolderShieldSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'folder-shield icon',
  ...props
}: PiFolderShieldSolidProps): JSX.Element {
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
      <path d="M11.951 11.136a.04.04 0 0 1 .03 0l1.902.687q.026.01.03.039l.079 1.027a2.83 2.83 0 0 1-1.474 2.704l-.518.28a.04.04 0 0 1-.043 0l-.53-.301a2.83 2.83 0 0 1-1.425-2.567l.044-1.151a.05.05 0 0 1 .03-.04z" fill="currentColor"/><path fillRule="evenodd" d="M8.806 2c.377 0 .758-.001 1.118.108a2.5 2.5 0 0 1 .86.46c.291.24.502.557.71.871l.05.075.576.863c.295.442.335.485.365.51a.5.5 0 0 0 .173.092c.037.011.095.021.626.021h2.359c1.084 0 1.958 0 2.666.058.729.06 1.369.185 1.961.487a5 5 0 0 1 2.185 2.185c.302.593.428 1.233.487 1.962.058.707.058 1.582.058 2.665v2.286c0 1.084 0 1.958-.058 2.666-.06.729-.185 1.369-.487 1.961a5 5 0 0 1-2.185 2.185c-.592.302-1.232.428-1.961.487C17.6 22 16.727 22 15.643 22H8.357c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.961-.487a5 5 0 0 1-2.185-2.185c-.302-.592-.428-1.232-.487-1.961C1 16.6 1 15.727 1 14.643V9.357c0-1.083 0-1.958.058-2.665.06-.73.185-1.37.487-1.962A5 5 0 0 1 3.73 2.545c.592-.302 1.233-.427 1.961-.487C6.4 2 7.273 2 8.357 2zm3.854 7.255a2.04 2.04 0 0 0-1.388 0l-1.876.678a2.04 2.04 0 0 0-1.348 1.844l-.044 1.151a4.83 4.83 0 0 0 2.433 4.381l.53.302c.613.35 1.364.358 1.986.021l.518-.28a4.83 4.83 0 0 0 2.515-4.617l-.08-1.027a2.04 2.04 0 0 0-1.343-1.766z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
