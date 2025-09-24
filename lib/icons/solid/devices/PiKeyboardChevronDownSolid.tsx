import React from 'react';

/**
 * PiKeyboardChevronDownSolid icon from the solid style in devices category.
 */
interface PiKeyboardChevronDownSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiKeyboardChevronDownSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'keyboard-chevron-down icon',
  ...props
}: PiKeyboardChevronDownSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M8.357 2C7.273 2 6.4 2 5.691 2.058c-.728.06-1.369.185-1.961.487A5 5 0 0 0 1.545 4.73c-.302.592-.428 1.233-.487 1.961C1 7.4 1 8.273 1 9.357v1.286c0 1.084 0 1.958.058 2.666.06.729.185 1.369.487 1.961a5 5 0 0 0 2.185 2.185c.592.302 1.233.428 1.961.487C6.4 18 7.273 18 8.357 18h7.286c1.084 0 1.958 0 2.666-.058.729-.06 1.369-.185 1.961-.487a5 5 0 0 0 2.185-2.185c.302-.592.428-1.232.487-1.961C23 12.6 23 11.727 23 10.643V9.357c0-1.084 0-1.958-.058-2.666-.06-.728-.185-1.369-.487-1.96a5 5 0 0 0-2.185-2.186c-.592-.302-1.232-.428-1.961-.487C17.6 2 16.727 2 15.643 2zM6 6a1 1 0 0 0 0 2h.01a1 1 0 1 0 0-2zm4 0a1 1 0 0 0 0 2h.01a1 1 0 1 0 0-2zm4 0a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2zm4 0a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2zM6 9a1 1 0 0 0 0 2h.01a1 1 0 1 0 0-2zm4 0a1 1 0 0 0 0 2h.01a1 1 0 1 0 0-2zm4 0a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2zm4 0a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2zM8 12a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z" clipRule="evenodd" fill="currentColor"/><path d="M6.072 19.794a1 1 0 0 1 1.3-.557l3.81 1.525c.483.193.58.225.666.238q.151.024.304 0c.087-.013.183-.045.665-.238l3.812-1.525a1 1 0 0 1 .742 1.857l-3.886 1.555c-.365.146-.687.275-1.03.328a3 3 0 0 1-.91 0c-.343-.053-.665-.182-1.03-.328l-3.886-1.555a1 1 0 0 1-.557-1.3Z" fill="currentColor"/>
    </svg>
  );
}
