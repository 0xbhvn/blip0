import React from 'react';

/**
 * PiFolderBoltSolid icon from the solid style in files-&-folders category.
 */
interface PiFolderBoltSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFolderBoltSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'folder-bolt icon',
  ...props
}: PiFolderBoltSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M8.806 2c.377 0 .758-.001 1.118.108a2.5 2.5 0 0 1 .86.46c.291.24.502.557.71.871l.05.075.576.863c.295.442.335.485.365.51a.5.5 0 0 0 .173.092c.037.011.095.021.626.021h2.359c1.084 0 1.958 0 2.666.058.729.06 1.369.185 1.961.487a5 5 0 0 1 2.185 2.185c.302.593.428 1.233.487 1.962.058.707.058 1.582.058 2.665v2.286c0 1.084 0 1.958-.058 2.666-.06.729-.185 1.369-.487 1.961a5 5 0 0 1-2.185 2.185c-.592.302-1.232.428-1.961.487C17.6 22 16.727 22 15.643 22H8.357c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.961-.487a5 5 0 0 1-2.185-2.185c-.302-.592-.428-1.232-.487-1.961C1 16.6 1 15.727 1 14.643V9.357c0-1.083 0-1.958.058-2.665.06-.73.185-1.37.487-1.962A5 5 0 0 1 3.73 2.545c.592-.302 1.233-.427 1.961-.487C6.4 2 7.273 2 8.357 2zm3.994 8.6a1 1 0 1 0-1.6-1.2l-1.824 2.433a9 9 0 0 0-.447.627c-.101.163-.307.51-.277.947.035.484.3.922.714 1.175.374.228.778.205.97.19.217-.017.486-.062.76-.108l1.607-.267L11.2 16.4a1 1 0 0 0 1.6 1.2l1.825-2.433c.167-.223.33-.44.446-.626.101-.164.307-.512.277-.948a1.5 1.5 0 0 0-.714-1.174c-.373-.229-.778-.206-.97-.19a10 10 0 0 0-.76.107l-1.606.267z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
