import React from 'react';

/**
 * PiGitFork01Solid icon from the solid style in development category.
 */
interface PiGitFork01SolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGitFork01Solid({
  size = 24,
  color,
  className,
  ariaLabel = 'git-fork-01 icon',
  ...props
}: PiGitFork01SolidProps): JSX.Element {
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
      <path d="M6 1.5a4 4 0 0 0-.944 7.888c.052.518.157.99.38 1.428a4 4 0 0 0 1.748 1.748c.485.247 1.002.346 1.564.392.541.044 1.206.044 2.01.044H11v1.626a4.002 4.002 0 0 0 1 7.874 4 4 0 0 0 1-7.874V13h.241c.805 0 1.47 0 2.01-.044.563-.046 1.08-.145 1.565-.392a4 4 0 0 0 1.748-1.748c.223-.438.328-.91.38-1.428A4.002 4.002 0 0 0 18 1.5a4 4 0 0 0-1.066 7.856 1.7 1.7 0 0 1-.152.552 2 2 0 0 1-.874.874c-.156.08-.38.145-.819.18-.45.037-1.032.038-1.889.038h-2.4c-.857 0-1.439 0-1.889-.038-.438-.035-.663-.1-.819-.18a2 2 0 0 1-.874-.874 1.7 1.7 0 0 1-.152-.552A4.002 4.002 0 0 0 6 1.5Z" fill="currentColor"/>
    </svg>
  );
}
