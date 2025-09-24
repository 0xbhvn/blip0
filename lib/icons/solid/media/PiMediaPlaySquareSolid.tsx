import React from 'react';

/**
 * PiMediaPlaySquareSolid icon from the solid style in media category.
 */
interface PiMediaPlaySquareSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMediaPlaySquareSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'media-play-square icon',
  ...props
}: PiMediaPlaySquareSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M10.357 2h3.286c1.084 0 1.958 0 2.666.058.729.06 1.369.185 1.961.487a5 5 0 0 1 2.185 2.185c.302.592.428 1.233.487 1.961C21 7.4 21 8.273 21 9.357v5.286c0 1.084 0 1.958-.058 2.666-.06.729-.185 1.369-.487 1.961a5 5 0 0 1-2.185 2.185c-.592.302-1.232.428-1.961.487C15.6 22 14.727 22 13.643 22h-3.286c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.592-.428-1.232-.487-1.961C3 16.6 3 15.727 3 14.643V9.357c0-1.084 0-1.958.058-2.666.06-.728.185-1.369.487-1.96A5 5 0 0 1 5.73 2.544c.592-.302 1.233-.428 1.961-.487C8.4 2 9.273 2 10.357 2Zm2.96 6.853.04.023.257.148.04.023c.565.327 1.048.605 1.411.862.367.26.75.587.962 1.065a2.52 2.52 0 0 1 0 2.052c-.212.478-.595.806-.962 1.065-.363.257-.846.535-1.411.862l-.04.023-.257.148-.04.023c-.565.327-1.048.606-1.452.792-.408.188-.883.355-1.403.3a2.52 2.52 0 0 1-1.778-1.026c-.307-.423-.4-.918-.44-1.366-.041-.442-.041-1-.041-1.652v-.39c0-.652 0-1.21.04-1.652.041-.448.134-.943.441-1.366a2.52 2.52 0 0 1 1.778-1.026c.52-.055.995.112 1.403.3.404.186.887.465 1.452.792Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
